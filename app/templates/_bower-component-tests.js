(function() {
  /*global describe, beforeEach, it*/
  'use strict';
  var assert = require('assert');
  var <%= packageName %> = require('../src/<%= packageName %>');

  describe('<%= packageName %>', function() {
    it('elvis rock!', function() {
      assert( <%= packageName %> .name === '<%= packageName %>');
    });
  });
})();