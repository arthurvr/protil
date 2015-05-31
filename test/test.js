var test = require('tape');
var protil = require('../');

test('export protil object', function(t) {
    t.equal(typeof protil, 'object');
    t.end();
});

test('protil.always', function(t){
    var always = protil.always;
    t.plan(5);
    always(function(a,b){
        return new Promise(function(r,reject){
            t.notEquals(a,b, "Should pass down args correctly");
            return reject('test');
        })
    })(1,2)
    .then(function(data){
        t.ok(data.rejected, "Should be flagged as rejected");
        t.equals(data.value, 'test', "Should capture the reject reason");
    });

    always(function(){
        return "test";
    })()
    .then(function(data){
        t.notOk(data.rejected, "Should be flagged as resolved");
        t.equals(data.value, 'test', "Should handle non promise values");
    })
})