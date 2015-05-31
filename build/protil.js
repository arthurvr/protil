/**
 * protil
 * a utility library for working with promises
 */

/*global define*/
!(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(global);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(global);
  } else {
    global.protil = factory(global);
  }
})(this, function (global) {
  'use strict';

  var protil = {};
  console.log(Promise);
  var Promise = global.Promise;

  var prevProtil = undefined;
  if (global.protil) prevProtil = global.protil;

  // check for promise constructor
  if (!Promise) {
    var warning = 'Promise constructor not detected. ' + 'Please pass your promise implementation to the setPromise method.';
    console.warn(warning);
  }

  protil.setPromise = function (p) {
    Promise = p;
  };

  protil.noConflict = function noConflict() {
    global.protil = prevProtil;
    return this;
  };

  protil.always = function (fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var res = fn.apply(null, args);
      function handle(error, value) {
        return {
          value: value,
          rejected: error
        };
      }

      if (!res.then) {
        return Promise.resolve(handle(false, res));
      }
      return res.then(handle.bind(null, false), handle.bind(null, true));
    };
  };

  return protil;
});

//# sourceMappingURL=protil.js.map