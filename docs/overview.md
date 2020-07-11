---
id: overview
title: Overview
sidebar_label: Overview
---

Recipe Book is a mock service specifically designed to run alongside an application to make it easy to include in a CI pipeline.

Effective testing is imperative for companies to move quickly when building new features and feel confident in what they deploy.  It's important for tests to be useful and reliable or else no one will have confidence in them and they will be ignored.  Recipe Book was created to enable teams to build reliable testing around both UI tests as well as testing dependencies in a microservice architecture.

## Mocks in Testing
Effective unit tests mock out dependencies and imported code.  A robust test suite requires more than just unit tests.  For UI tests espectially, it can be important to verify that the application works under very specific scenarios that may be difficult to replicate.


## Ephemeral Mocks

Mocks in Rrecipe Book are only stored in Memory so when a CI job as completed and the container is shut down, the mocks go with it.  This mean that all mocks should be created as part of a test which makes for very explicit test expectations.

## Why Not Test Users?
If you have a system that makes it easy to get test users that satisfy the necessary conditions, that could be the way to go.  That can be a challenge for a number of companies as it requires not only setup in potentially several systems, data that doesn't change or can be easily reset and a good way to identify which user goes with which test scenario.

Recipe Book allows for generating mocks on the fly as part of a test setup so requiring a multitude of users is not required.