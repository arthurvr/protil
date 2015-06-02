var test = require('tape');

// promise libraries
var Promise = Promise || require('../lib/Promise');
var qPromise = require('q');
var bbPromise = require('bluebird');

var protil = require('../');

// helper function to return a promise
function returnPromise() {
  return new Promise(function(resolve, reject) {
    return true ? resolve(true) : reject(true);
  });
}

test('exports protil object', function(t) {
  t.equal(typeof protil, 'object');
  t.end();
});

test('es6 promise api is available', function(t) {
  t.equal(protil._checkPromises(), true);
  t.end();
});

test('setPromises applies user provided promise implementation', function(t) {
  protil.setPromises(null); // will fail if promises aren't available by default

  protil.setPromises(qPromise);
  t.equal(protil._checkPromises(), true);

  protil.setPromises(bbPromise);
  t.equal(protil._checkPromises(), true);

  t.end();
});

