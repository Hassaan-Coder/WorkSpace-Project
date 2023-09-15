"use strict";
(() => {
var exports = {};
exports.id = 6813;
exports.ids = [6813];
exports.modules = {

/***/ 97758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ io)
});

;// CONCATENATED MODULE: external "socket.io"
const external_socket_io_namespaceObject = require("socket.io");
;// CONCATENATED MODULE: ./pages/api/socket/io.ts

const config = {
    api: {
        bodyParser: false
    }
};
const ioHandler = (req, res)=>{
    if (!res.socket.server.io) {
        const path = "/api/socket/io";
        const httpServer = res.socket.server;
        const io = new external_socket_io_namespaceObject.Server(httpServer, {
            path: path,
            // @ts-ignore
            addTrailingSlash: false
        });
        res.socket.server.io = io;
    }
    res.end();
};
/* harmony default export */ const io = (ioHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(97758));
module.exports = __webpack_exports__;

})();