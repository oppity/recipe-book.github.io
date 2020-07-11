---
id: testing-pipeline
title: Using In Testing
---

Once your applicaiton is pointed towards Recipe Book, you can create mocks.

Recipe Book enables tests to be very explicit in what they are expecting by pushing requirements into the test setup.  For instance, Mocha is a popular test runner for Javascript applications and offers a `before` block where specific responses required for the test can be defined:

```javascript
let mock

describe('Baking the cookies', function () {
    before(function () {
        const mocksToTest = {
            mock: [ { Mock }, { Mock } ]
        }

        axios.post('http://recipe-book:12001', mocksToTest)
    })

    it('should bake the cookies', function () {
        // Run your application tests here

        // Assert behavior worked based on the mocks provided
    })
})
```

See [Examples](examples) for 