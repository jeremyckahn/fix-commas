import fixCommas from '../lib/index';
import path from 'path';
import assert from 'assert';

import { readFileSync } from 'fs';

const beforeBasic = readFileSync(path.join(__dirname, 'before/basic.js'), 'utf8');
const afterBasic = readFileSync(path.join(__dirname, 'after/basic.js'), 'utf8');
const beforeComments = readFileSync(path.join(__dirname, 'before/comments.js'), 'utf8');
const afterComments = readFileSync(path.join(__dirname, 'after/comments.js'), 'utf8');

// Passing arrow functions ("lambdas") to Mocha is discouraged.
// http://mochajs.org/#arrow-functions
describe('fixCommas', function () {
  describe('basic functionality', function () {
    it('converts comma style from leading to trailing', function () {
      assert.equal(fixCommas(beforeBasic), afterBasic);
    });
  });

  describe('comment support', function () {
    it('converts comma style from leading to trailing', function () {
      assert.equal(fixCommas(beforeComments), afterComments);
    });
  });
});
