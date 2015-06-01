/**
 * protil
 * a utility library for working with promises
 */

!function(root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(global);
  } else if (root.window) {
    root.protil = factory(root);
  } else {
    return;
  }

}(this, function(root) {
  'use strict';

  let protil = {};
  let Promise = root.Promise;

  let prev;
  if (root.protil) prev = root.protil;

  protil.noConflict = function() {
    global.protil = prev;
    return this;
  };

  // check for promise constructor
  if (!Promise || typeof Promise !== 'function') {
    let warning = 'Promise constructor not detected. ' +
      'Please pass your promise implementation to the setPromise method.';
    console.warn(warning);
  }

  protil.setPromise = function(p) {
    Promise = p;
  };

  return protil;
});
