/**
 * protil
 * a utility library for working with promises
 */

!function(root, factory) {
  if (typeof exports === 'object') {
    let Promise = Promise || require('../lib/Promise');
    global.Promise = Promise;
    module.exports = factory(global);
  } else if (root.window) {
    root.protil = factory(root);
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

  protil.setPromises = function(Pc) {
    if (!this._checkPromises(Pc)) {
      throw new Error('protil Promises must provide ES6 Promise Constructor');
    } else {
      Promise = Pc;
    }
  };


  //
  //  Helpers
  //

  /**
   * Check if promise follows A+ spec
   * https://promisesaplus.com/
   * @param p (promise)
   * @returns {boolean}
   */
  protil.isValidPromise = function(p) {
    return typeof p.then().then === 'function' &&
      p.then() instanceof Object.getPrototypeOf(p).constructor;
  };

  /**
   * Make sure Promise constructor is available
   * @param Pc
   * @returns {boolean}
   * @private
   */
  protil._checkPromises = function(Pc) {
    let Prom = Pc || Promise;
    let p;

    try {
      p = new Prom(function(resolve, reject) {
        return true ? resolve(true) : reject(false);
      });
    } catch (e) {
      return false;
    }

    return this.isValidPromise(p);
  };

  return protil;
});
