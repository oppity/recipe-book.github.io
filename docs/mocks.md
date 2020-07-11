---
id: mocks
title: Mocks
sidebar_label: Creating Mocks
---

## Structure of Mocks
Mocks require a request/response pattern to work.  This tells Recipe Book what to listen for and how to respond.  A `Mock` has the following format:

| Attribute             | Description                                                     | Format  | Options                       |
| --------------------- | --------------------------------------------------------------- | ------- | ----------------------------- |
| `name`                | A friendly name to reference a mock                             | String  |                               |
| `request.path`        | The url being requested.  Will match against `originalUrl`      | String  | Should start with `/`         |
| `request.method`      | The http method used in the request                             | String  | GET, PUT, POST, PATCH, DELETE |
| `response.body`       | The body that will be returned when this mock is called.        | Object  |                               |
| `response.statusCode` | The status code that will be returned when this mock is called. | Integer | Any valid status code         |
| `response.timeout`    | A time for the Recipe Book to wait before responding.           | Integer | Measured in milliseconds      |

The body of the response can be whatever you need to support your testing or development workflow.

## Creating Mocks
### Single Mock
Issue a `POST` to `/mocks` to create a new mock.  Be sure to follow the correct structure:

```json
{
    "mock": {
        "name": "getRecipes",
        "request": {
            "path": "/recipes",
            "method": "GET"
        },
        "response": {
            "body": { "data": [ { "recipe": "cookies" }, { "rrecipe": "cake" }] },
            "statusCode": 200
        }
    }
}
```

This works for errors as well.  Simply change the status code and body accordingly:
```json
{
    "mock": {
        "name": "getCookies",
        "request": {
            "path": "/recipes/cookies",
            "method": "GET"
        },
        "response": {
            "body": { 
                "message": "Oh no!  Something must have been overcooked!", 
                "error": "Internal Server Error" 
            },
            "statusCode": 500
        }
    }
}
```


### Creating in Bulk
Creating multiple mocks at the same time is simple.  The request/response structure does not change.  Simply make your request as an array:

```json
{
    "mock": [ 
        { Mock }, 
        { Mock }, 
        { Mock }
    ]
}
```

### Simulating Latency
Timeouts enable latency in a request.  This would be useful if you want to validate how your application handles long running requests which can be hard to simulate.

Add a timeout in milliseconds to the response:
```json
    {
        "mock": {
            "name": "bakeCookies",
            "request": {
                "path": "/recipes/cookies",
                "method": "POST"
            },
            "response": {
                "body": { "message": "Cookies are done!" },
                "statusCode": 200,
                "timeout": 5000 // 5 seconds!
            }
        }
    }
```

### Stateful Mocks
Some situations require data to change depending on how many times it's called.  For instance, take a flow that involves processing a transaction.  It might follow some particular steps:

1. Check the user's balance: `GET /balance`
2. Process a credit transaction to increase the balance: `POST /credit`
3. Confirm the balance is correct `GET /balance`

In this case, balance is called twice and should be different each time.

To create a stateful mock, such as checking the balance multiple times, turn the response into an array with items ordered as they should be returned.

```json
    {
        "mock": {
            "name": "getBalance",
            "request": {
                "path": "/credit",
                "method": "GET"
            },
            "response": [
                {
                    "body": { "balance": 100 },
                    "statusCode": 200
                },
                {
                    "body": { "balance": 150 },
                    "statusCode": 200
                }
            ]
        }
    }
```

## Listing All Mocks
You can get a list of all mocks currently available by issuing a `GET /mocks` request

## Clearing Mocks
You can clear all the available mocks by issuing a `DELETE /mocks` request