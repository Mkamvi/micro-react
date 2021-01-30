/**
 * author iWuzhi
 * date 2020-08-24 22:52:20
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        /* -------------------------------- css 初始化 -------------------------------- */
        '/global-config/lib/css/normalize.css'
    ];
});
