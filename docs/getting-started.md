---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Run Recipe Book in Docker:

```
docker run -d oppity/recipe-book:latest
```

The service will be available at [http://localhost:12001](http://localhost:12001).

## Creating A New Mock
Recipe Book works by sending in mock request and response information and then replaying it when a matching request is made.

Send a `POST` request to `http://localhost:12001/mock` with a payload containing the request/response combination:

```json
    {
        "mock": {
            "name": "balances",
            "request": {
                "path": "/balance",
                "method": "GET"
            },
            "response": {
                "body": {
                    "balance": 100,
                },
                "statusCode": 200
            }
        }
    }
```

Making a request to `GET http://localhost:12001/balance` will return the provided body and a status code of 200.

More detail about the payload structure can be found in the [Quick Reference](reference#rest-api).

## Clearing Mocks
Mocks can be deleted all at once by issuing a `DELETE http://localhost:12001/mocks` request.

Currently, it is not possible to delete a single mock.
