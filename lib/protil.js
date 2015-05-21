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

    let prevProtil;
    if (global.protil) {
        prevProtil = global.protil;
    }

    protil.noConflict = function noConflict() {
        global.protil = prevProtil;
        return protil;
    };

    return protil;
});
