"use strict";
exports.id = 8785;
exports.ids = [8785];
exports.modules = {

/***/ 78785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ currentProfile)
/* harmony export */ });
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54205);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93302);


const currentProfile = async ()=>{
    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I8)();
    if (!userId) {
        return null;
    }
    const profile = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.profile.findUnique({
        where: {
            userId
        }
    });
    return profile;
};


/***/ }),

/***/ 93302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ })

};
;