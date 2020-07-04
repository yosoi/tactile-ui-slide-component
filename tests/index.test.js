/* global assert, setup, suite, test */
require('aframe');
require('../index.js');
var entityFactory = require('./helpers').entityFactory;

suite('slide component', function () {
  var component;
  var el;

  setup(function (done) {
    el = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'slide') { return; }
      component = el.components['slide'];
      done();
    });
    el.setAttribute('slide', {});
  });

  suite('foo property', function () {
    test('is good', function () {
      assert.equal(1, 1);
    });
  });
});
