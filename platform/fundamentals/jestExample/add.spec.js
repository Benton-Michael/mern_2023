const add = require('./add');
 
describe('add', () => {
    test('correctly returns the sum of two numbers', () => {
        expect(add(2, 2)).toBe(4);
        expect(add(4, 6)).toBe(10); 
    });
});


// to run the script use npm run test
// docs see: https://nodejs.org/api/assert.html
// https://jestjs.io/docs/en/getting-started
