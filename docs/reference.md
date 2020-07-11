---
id: reference
title: Quick Reference
sidebar_label: Quick Reference
---

## REST API
Recipe Book exposes a basic REST API for managing mocks on the service.

| Endpoint | Method | Use                                | Body                   | Parameters |
| -------- | ------ | ---------------------------------- | ---------------------- | ---------- |
| `/mock`  | GET    | List available mocks on the server | None                   | None       |
| `/mock`  | POST   | Create a new mock                  | `{ mock: [{ Mock }] }` | None       |
| `/mock`  | DELETE | Clear all mocks                    | None                   | None       |

## Configuration
Recipe Book can be configured by changing environment variables

| Variable | Default | Format | Description                                |
| -------- | ------- | ------ | ------------------------------------------ |
| `PORT`   | `12001` | Number | The port the application itself listens on |