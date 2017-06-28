import { fixCommas } from '../lib/index';
import assert from 'assert';

// Passing arrow functions ("lambdas") to Mocha is discouraged.
// http://mochajs.org/#arrow-functions
describe('fixCommas', function () {
  it('works', function () {
    assert.equal(typeof fixCommas, 'function');
  });
});
