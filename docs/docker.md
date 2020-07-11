---
id: docker
title: Running in Docker
---

## Starting Recipe Book
Run Recipe Book in Docker:

```
docker run -d oppity/recipe-book:latest
```

The service will be available at [http://localhost:12001](http://localhost:12001).

## Changing Docker Ports
By default, Recipe Book runs on port 12001.  This can be overwritten by mapping the docker container to a different port:

```
docker run -p <yourFavoriteNumber>:12001 oppity/recipe-book:latest
```

## Configuring Recipe Book
It's possible to provide environment variables to the container to change the configuration of Recipe Book.  Refer to the [Quick Reference](reference#configuration) for available options.

## Versions
Recipe Book follows typical semantic versioning for tags and always includes a `latest` tag.

Refer to [Docker Hub](https://hub.docker.com/r/oppity/recipe-book) for a listing of available versions.