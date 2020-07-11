---
id: bitbucket
title: Bitbucket Pipelines 
---

Docker Compose is not available directly in Bitbucket Pipelines so it needs to be installed as part of the configuration.

This example sets up Docker Compose so that the application is built and integration tests can be run on every push to a branch or merge.  Additional documentation about Bitbucket Pipelines can be found here: [Build, Test and Deploy with Pipelines](https://confluence.atlassian.com/bitbucket/build-test-and-deploy-with-pipelines-792496469.html).

```yml
# This is a sample build configuration for JavaScript.
# Check our guides at https://confluence.atlassian.com/x/14UWN for more examples.
# Only use spaces to indent your .yml configuration.
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: node:12.16.0

pipelines:
  default:
    - step:
        name: Build
        caches:
          - node
        script:
          - npm install
        artifacts:
          - node_modules/**
    - step:
        name: Integration Tests
        caches:
          - node
          - docker
          - pip
        script:
            # Docker Compose is not available in Bitbucket pipelines so it needs to be installed
          - apk add py-pip python-dev libffi-dev openssl-dev gcc libc-dev make
          - pip install --no-cache-dir docker-compose
          - docker-compose -v
          # Put in whatever command you use for running your tests
          - docker-compose up --abort-on-container-exit
        services:
          - docker
```

Sample `docker-compose.yml` to run the UI tests via [TestCafe](https://devexpress.github.io/testcafe/):
```yml
version: '3'
services:
  recipe-book:
    image: oppity/recipe-book:latest
    ports:
        - 12001:12001
  web-app:
    build: .
    environment:
      - NODE_ENV=development
    ports:
      - 80:80
  test:
    image: testcafe/testcafe:latest
    depends_on:
      - web-app
      - recipe-book
    environment:
      - NODE_ENV=ci
    volumes:
      - ../test:/tests
      - ../node_modules:/node_modules
    entrypoint:
      [
        '/opt/testcafe/docker/testcafe-docker.sh',
        "'chromium:headless --no-sandbox'",
        '/tests/ui/**/*.js',
      ]
```