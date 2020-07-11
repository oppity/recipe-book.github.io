---
id: tips
title: Tips & Best Practices
---

## Use Recipe Book During Development
The best way to feel confident in the code you deploy is to have verified it against a variety of scenarios.  Sometimes these scenarios are very hard to reproduce with a live service leaving the actual development only partially complete.  A developer can run Recipe Book locally in Docker and create the mocks needed for their work.  As long as the image is running, the mocks will be available.

## Incorporate testing against live endpoints
No matter how effective your mocks, at some point your code will need to work on live endpoints.  It's important that you periodically verify your code against a service to be sure everything works correctly.  During the development phase, periodically point your application to live endpoints to verify at least the core usage and make sure to incorporate some level of testing that can be run in a delivery pipeline.

## Create a single folder to store basic mocks
Similar to the way unit tests will rely on fixtures, keeping a base set of mocks that can be cloned, modified and posted to Recipe Book makes the mocks easier to maintain.  If a contract changes, the update can be made in one place without significant changes to tests unless that test is directly impacted.

## Only modify what is needed for the test
Import a mock and modify specifically what is required for the test.  For instance, if you wanted to verify that a specific value, such as an account balance, was being displayed correctly, only modify the balance field.  This will make the test setup significantly cleaner and your tests more readable.  Having to create new mocks from scratch with all the extra information will make the tests harder to understand because the change that matters is not clear.

An example of a clear test:
```javascript
describe('$250 dollar balance test', function () {
    before(function () {
        const balanceMock = require('./balanceMock')
        // { userId: '0001', balance: 500, modified: 2019-08-12T00:00:00.000z}
        const mockToSubmit = _.cloneDeep(balanceMock)

        mocktoSubmit.balance = 250
    })

    // ... Do the tests to validate the balance displayed correctly
})
```
