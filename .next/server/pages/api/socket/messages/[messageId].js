"use strict";
(() => {
var exports = {};
exports.id = 4403;
exports.ids = [4403];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 34110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ currentProfilePages)
});

;// CONCATENATED MODULE: external "@clerk/nextjs/server"
const server_namespaceObject = require("@clerk/nextjs/server");
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(37646);
;// CONCATENATED MODULE: ./lib/current-profile-pages.ts


const currentProfilePages = async (req)=>{
    const { userId } = (0,server_namespaceObject.getAuth)(req);
    if (!userId) {
        return null;
    }
    const profile = await db.db.profile.findUnique({
        where: {
            userId
        }
    });
    return profile;
};


/***/ }),

/***/ 37646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ }),

/***/ 46998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_current_profile_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34110);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37646);



async function handler(req, res) {
    if (req.method !== "DELETE" && req.method !== "PATCH") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        const profile = await (0,_lib_current_profile_pages__WEBPACK_IMPORTED_MODULE_1__/* .currentProfilePages */ .l)(req);
        const { messageId, serverId, channelId } = req.query;
        const { content } = req.body;
        if (!profile) {
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        if (!serverId) {
            return res.status(400).json({
                error: "Server ID missing"
            });
        }
        if (!channelId) {
            return res.status(400).json({
                error: "Channel ID missing"
            });
        }
        const server = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.server.findFirst({
            where: {
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id
                    }
                }
            },
            include: {
                members: true
            }
        });
        if (!server) {
            return res.status(404).json({
                error: "Server not found"
            });
        }
        const channel = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.channel.findFirst({
            where: {
                id: channelId,
                serverId: serverId
            }
        });
        if (!channel) {
            return res.status(404).json({
                error: "Channel not found"
            });
        }
        const member = server.members.find((member)=>member.profileId === profile.id);
        if (!member) {
            return res.status(404).json({
                error: "Member not found"
            });
        }
        let message = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.message.findFirst({
            where: {
                id: messageId,
                channelId: channelId
            },
            include: {
                member: {
                    include: {
                        profile: true
                    }
                }
            }
        });
        if (!message || message.deleted) {
            return res.status(404).json({
                error: "Message not found"
            });
        }
        const isMessageOwner = message.memberId === member.id;
        const isAdmin = member.role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.MemberRole.ADMIN;
        const isModerator = member.role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.MemberRole.MODERATOR;
        const canModify = isMessageOwner || isAdmin || isModerator;
        if (!canModify) {
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        if (req.method === "DELETE") {
            message = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.message.update({
                where: {
                    id: messageId
                },
                data: {
                    fileUrl: null,
                    content: "This message has been deleted.",
                    deleted: true
                },
                include: {
                    member: {
                        include: {
                            profile: true
                        }
                    }
                }
            });
        }
        if (req.method === "PATCH") {
            if (!isMessageOwner) {
                return res.status(401).json({
                    error: "Unauthorized"
                });
            }
            message = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.message.update({
                where: {
                    id: messageId
                },
                data: {
                    content
                },
                include: {
                    member: {
                        include: {
                            profile: true
                        }
                    }
                }
            });
        }
        const updateKey = `chat:${channelId}:messages:update`;
        res?.socket?.server?.io?.emit(updateKey, message);
        return res.status(200).json(message);
    } catch (error) {
        console.log("[MESSAGE_ID]", error);
        return res.status(500).json({
            error: "Internal Error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(46998));
module.exports = __webpack_exports__;

})();