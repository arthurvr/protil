/**
 *
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
        global.noob = factory(global);
    }
})(this, function (global) {
    'use strict';

    var protil = {};

    var prevProtil = undefined;
    if (global.protil) {
        prevProtil = global.protil;
    }

    protil.noConflict = function noConflict() {
        global.protil = prevProtil;
        return protil;
    };

    return protil;
});

//# sourceMappingURL=protil.js.map