/**
 * protil
 * a utility library for working with promises
 */

/*global define*/
!function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return factory(global);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(global);
  } else {
    global.protil = factory(global);
  }

}(this, function(global) {
  'use strict';

  let protil = {};
  let Promise = Promise;

  let prevProtil;
  if (global.protil) prevProtil = global.protil;

  // check for promise constructor
  if (!Promise) {
    let warning = 'Promise constructor not detected. ' +
      'Please pass your promise implementation to the setPromise method.';
    console.warn(warning);
  }


  protil.noConflict = function noConflict() {
    global.protil = prevProtil;
    return this;
  };

  return protil;
});
