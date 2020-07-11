---
id: docker-compose
title: Docker Compose
---

The benefit of Recipe Book is that it is able to run as a sidecar to your application inside your CI pipeline further reducing your dependency on external servers.  This increases the reliability of your testing.

To use Docker Compose to improve testing, your application needs to support changing out the base url for endpoints from a parameter.  The easiest is an environment variable as they can be changed directly inside `docker-compose.yml`.  Any endpoint that you want to point to Recipe Book should be changed to the path provided by Docker Compose.  In the example below, Recipe Book would be available to your application at: `https://recipe-book:12001`.

For instance, assume you have a config file that will change out parameters based on the `NODE_ENV` environment variable:
```javascript
const config = {
    development: {
        baseUrl: 'http://myApi.myDevDomain.com'
    },
    ci: {
        baseUrl: 'http://recipe-book:12001'
    },
    production: {
        baseUrl: 'http://myApi.myPRODDomain.com'
    }
}

module.exports = config[process.env.NODE_ENV]

```

Create a `docker-compose.yml` file with Recipe Book and your application:

```yml
version: "3"
services:
  recipe-book:
    image: oppity/recipe-book:latest
    container_name: recipe-book
    ports:
      - 12001:12001
  your-application:
    build: .
    container_name: example-ui
    environment:
      - PORT=8000
      - NODE_ENV=ci # Changing this variable will change which baseUrl your app uses
    ports:
      - 8000:8000
    command: npm start

```

Running `docker-compose up` will start both applications.  You will need to create mocks prior to using your application which can be done by issuing requests directly to Recipe Book at [http://localhost:12001](http://localhost:12001).

Tests can be run against these applications.

!! **Important:** All mocks that you have created will go away when the docker containers are terminated.

See the [Examples](examples) for more ideas.
