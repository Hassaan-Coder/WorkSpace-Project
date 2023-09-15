"use strict";
(() => {
var exports = {};
exports.id = 3568;
exports.ids = [3568];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 47382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/channels/[channelId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./lib/current-profile.ts
var current_profile = __webpack_require__(78785);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(93302);
;// CONCATENATED MODULE: ./app/api/channels/[channelId]/route.ts




async function DELETE(req, { params }) {
    try {
        const profile = await (0,current_profile/* currentProfile */.D)();
        const { searchParams } = new URL(req.url);
        const serverId = searchParams.get("serverId");
        if (!profile) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        if (!serverId) {
            return new next_response/* default */.Z("Server ID missing", {
                status: 400
            });
        }
        if (!params.channelId) {
            return new next_response/* default */.Z("Channel ID missing", {
                status: 400
            });
        }
        const server = await db.db.server.update({
            where: {
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [
                                client_.MemberRole.ADMIN,
                                client_.MemberRole.MODERATOR
                            ]
                        }
                    }
                }
            },
            data: {
                channels: {
                    delete: {
                        id: params.channelId,
                        name: {
                            not: "Work"
                        }
                    }
                }
            }
        });
        return next_response/* default */.Z.json(server);
    } catch (error) {
        console.log("[CHANNEL_ID_DELETE]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}
async function PATCH(req, { params }) {
    try {
        const profile = await (0,current_profile/* currentProfile */.D)();
        const { name, type } = await req.json();
        const { searchParams } = new URL(req.url);
        const serverId = searchParams.get("serverId");
        if (!profile) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        if (!serverId) {
            return new next_response/* default */.Z("Server ID missing", {
                status: 400
            });
        }
        if (!params.channelId) {
            return new next_response/* default */.Z("Channel ID missing", {
                status: 400
            });
        }
        if (name === "Work") {
            return new next_response/* default */.Z("Name cannot be 'Work'", {
                status: 400
            });
        }
        const server = await db.db.server.update({
            where: {
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [
                                client_.MemberRole.ADMIN,
                                client_.MemberRole.MODERATOR
                            ]
                        }
                    }
                }
            },
            data: {
                channels: {
                    update: {
                        where: {
                            id: params.channelId,
                            NOT: {
                                name: "Work"
                            }
                        },
                        data: {
                            name,
                            type
                        }
                    }
                }
            }
        });
        return next_response/* default */.Z.json(server);
    } catch (error) {
        console.log("[CHANNEL_ID_PATCH]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fchannels%2F%5BchannelId%5D%2Froute&name=app%2Fapi%2Fchannels%2F%5BchannelId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fchannels%2F%5BchannelId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Chassa%5COneDrive%5CDesktop%5Cdiscord%5Capp&appPaths=%2Fapi%2Fchannels%2F%5BchannelId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/channels/[channelId]/route","pathname":"/api/channels/[channelId]","filename":"route","bundlePath":"app/api/channels/[channelId]/route"},"resolvedPagePath":"C:\\Users\\hassa\\OneDrive\\Desktop\\discord\\app\\api\\channels\\[channelId]\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/channels/[channelId]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [652,25,4205,9565,5501,8785], () => (__webpack_exec__(47382)));
module.exports = __webpack_exports__;

})();