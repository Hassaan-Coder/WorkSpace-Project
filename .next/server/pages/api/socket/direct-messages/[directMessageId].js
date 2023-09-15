"use strict";
(() => {
var exports = {};
exports.id = 7414;
exports.ids = [7414];
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

/***/ 78023:
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
        const { directMessageId, conversationId } = req.query;
        const { content } = req.body;
        if (!profile) {
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        if (!conversationId) {
            return res.status(400).json({
                error: "Conversation ID missing"
            });
        }
        const conversation = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.conversation.findFirst({
            where: {
                id: conversationId,
                OR: [
                    {
                        memberOne: {
                            profileId: profile.id
                        }
                    },
                    {
                        memberTwo: {
                            profileId: profile.id
                        }
                    }
                ]
            },
            include: {
                memberOne: {
                    include: {
                        profile: true
                    }
                },
                memberTwo: {
                    include: {
                        profile: true
                    }
                }
            }
        });
        if (!conversation) {
            return res.status(404).json({
                error: "Conversation not found"
            });
        }
        const member = conversation.memberOne.profileId === profile.id ? conversation.memberOne : conversation.memberTwo;
        if (!member) {
            return res.status(404).json({
                error: "Member not found"
            });
        }
        let directMessage = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.directMessage.findFirst({
            where: {
                id: directMessageId,
                conversationId: conversationId
            },
            include: {
                member: {
                    include: {
                        profile: true
                    }
                }
            }
        });
        if (!directMessage || directMessage.deleted) {
            return res.status(404).json({
                error: "Message not found"
            });
        }
        const isMessageOwner = directMessage.memberId === member.id;
        const isAdmin = member.role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.MemberRole.ADMIN;
        const isModerator = member.role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.MemberRole.MODERATOR;
        const canModify = isMessageOwner || isAdmin || isModerator;
        if (!canModify) {
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        if (req.method === "DELETE") {
            directMessage = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.directMessage.update({
                where: {
                    id: directMessageId
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
            directMessage = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.directMessage.update({
                where: {
                    id: directMessageId
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
        const updateKey = `chat:${conversation.id}:messages:update`;
        res?.socket?.server?.io?.emit(updateKey, directMessage);
        return res.status(200).json(directMessage);
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
var __webpack_exports__ = (__webpack_exec__(78023));
module.exports = __webpack_exports__;

})();