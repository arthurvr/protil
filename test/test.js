var test = require('tape');
var protil = require('../');

test('export protil object', function(t) {
    t.equal(typeof protil, 'object');
    t.end();
});
