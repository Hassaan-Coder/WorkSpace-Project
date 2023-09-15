exports.id = 8749;
exports.ids = [8749];
exports.modules = {

/***/ 54754:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84102));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64092));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83748));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77984));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 451));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11508));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21851));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14510));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53824))

/***/ }),

/***/ 89425:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84102));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64092));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77984));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 451));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27467));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69449));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17668))

/***/ }),

/***/ 19481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ ActionTooltip)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tooltip/dist/index.mjs
var dist = __webpack_require__(79428);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./components/ui/tooltip.tsx
/* __next_internal_client_entry_do_not_use__ Tooltip,TooltipTrigger,TooltipContent,TooltipProvider auto */ 



const TooltipProvider = dist/* Provider */.zt;
const Tooltip = dist/* Root */.fC;
const TooltipTrigger = dist/* Trigger */.xz;
const TooltipContent = /*#__PURE__*/ react_.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Content */.VY, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0,utils.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
TooltipContent.displayName = dist/* Content */.VY.displayName;


;// CONCATENATED MODULE: ./components/action-tooltip.tsx
/* __next_internal_client_entry_do_not_use__ ActionTooltip auto */ 

const ActionTooltip = ({ label, children, side, align })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(TooltipProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tooltip, {
            delayDuration: 50,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TooltipTrigger, {
                    asChild: true,
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TooltipContent, {
                    side: side,
                    align: align,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-semibold text-sm capitalize",
                        children: label.toLowerCase()
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 69449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModeToggle: () => (/* binding */ ModeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51158);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71072);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44368);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39313);
/* __next_internal_client_entry_do_not_use__ ModeToggle auto */ 





function ModeToggle() {
    const { setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenu */ .h_, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuTrigger */ .$F, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                    className: "bg-transparent border-0",
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Sun */ .kOA, {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Moon */ .JFe, {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuContent */ .AW, {
                align: "end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("system"),
                        children: "System"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 17668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationAction: () => (/* binding */ NavigationAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51158);
/* harmony import */ var _components_action_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19481);
/* harmony import */ var _hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74038);
/* __next_internal_client_entry_do_not_use__ NavigationAction auto */ 



const NavigationAction = ()=>{
    const { onOpen } = (0,_hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .ActionTooltip */ .M, {
            side: "right",
            align: "center",
            label: "Add a WorkSpace",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>onOpen("createServer"),
                className: "group flex items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__/* .Plus */ .v37, {
                        className: "group-hover:text-white transition text-emerald-500",
                        size: 25
                    })
                })
            })
        })
    });
};


/***/ }),

/***/ 27467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationItem: () => (/* binding */ NavigationItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12857);
/* harmony import */ var _components_action_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19481);
/* __next_internal_client_entry_do_not_use__ NavigationItem auto */ 




const NavigationItem = ({ id, imageUrl, name })=>{
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onClick = ()=>{
        router.push(`/servers/${id}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .ActionTooltip */ .M, {
        side: "right",
        align: "center",
        label: name,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: onClick,
            className: "group relative flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("absolute left-0 bg-primary rounded-r-full transition-all w-[4px]", params?.serverId !== id && "group-hover:h-[20px]", params?.serverId === id ? "h-[36px]" : "h-[8px]")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden", params?.serverId === id && "bg-primary/10 text-primary rounded-[16px]"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        fill: true,
                        src: imageUrl,
                        alt: "Channel"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 53824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerChannel: () => (/* binding */ ServerChannel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33504);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51158);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12857);
/* harmony import */ var _components_action_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19481);
/* harmony import */ var _hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74038);
/* __next_internal_client_entry_do_not_use__ ServerChannel auto */ 






const iconMap = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_4__.ChannelType.TEXT]: lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Hash */ .kbs,
    [_prisma_client__WEBPACK_IMPORTED_MODULE_4__.ChannelType.AUDIO]: lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Mic */ .uc7,
    [_prisma_client__WEBPACK_IMPORTED_MODULE_4__.ChannelType.VIDEO]: lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Video */ .nkn
};
const ServerChannel = ({ channel, server, role })=>{
    const { onOpen } = (0,_hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .d)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const Icon = iconMap[channel.type];
    const onClick = ()=>{
        router.push(`/servers/${params?.serverId}/channels/${channel.id}`);
    };
    const onAction = (e, action)=>{
        e.stopPropagation();
        onOpen(action, {
            channel,
            server
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1", params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition", params?.channelId === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"),
                children: channel.name
            }),
            channel.name !== "Work" && role !== _prisma_client__WEBPACK_IMPORTED_MODULE_4__.MemberRole.GUEST && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ml-auto flex items-center gap-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .ActionTooltip */ .M, {
                        label: "Edit",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Edit */ .I8b, {
                            onClick: (e)=>onAction(e, "editChannel"),
                            className: "hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .ActionTooltip */ .M, {
                        label: "Delete",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Trash */ .rFk, {
                            onClick: (e)=>onAction(e, "deleteChannel"),
                            className: "hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        })
                    })
                ]
            }),
            channel.name === "Work" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Lock */ .HEZ, {
                className: "ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
            })
        ]
    });
};


/***/ }),

/***/ 83748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerHeader: () => (/* binding */ ServerHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33504);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39313);
/* harmony import */ var _hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74038);
/* __next_internal_client_entry_do_not_use__ ServerHeader auto */ 




const ServerHeader = ({ server, role })=>{
    const { onOpen } = (0,_hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    const isAdmin = role === _prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.ADMIN;
    const isModerator = isAdmin || role === _prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.MODERATOR;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenu */ .h_, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuTrigger */ .$F, {
                className: "focus:outline-none",
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
                    children: [
                        server.name,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ChevronDown */ ._ME, {
                            className: "h-5 w-5 ml-auto"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuContent */ .AW, {
                className: "w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]",
                children: [
                    isModerator && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("invite", {
                                server
                            }),
                        className: "text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Invite People",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .UserPlus */ .bDA, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    }),
                    isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("editServer", {
                                server
                            }),
                        className: "px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Server Settings",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Settings */ .Zrf, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    }),
                    isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("members", {
                                server
                            }),
                        className: "px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Manage Members",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Users */ .Qaw, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    }),
                    isModerator && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("createChannel"),
                        className: "px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Create Channel",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .PlusCircle */ .FUf, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    }),
                    isModerator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuSeparator */ .VD, {}),
                    isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("deleteServer", {
                                server
                            }),
                        className: "text-rose-500 px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Delete Server",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Trash */ .rFk, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    }),
                    !isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>onOpen("leaveServer", {
                                server
                            }),
                        className: "text-rose-500 px-3 py-2 text-sm cursor-pointer",
                        children: [
                            "Leave Server",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .LogOut */ .d6Z, {
                                className: "h-4 w-4 ml-auto"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 14510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerMember: () => (/* binding */ ServerMember)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33504);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12857);
/* harmony import */ var _components_user_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20410);
/* __next_internal_client_entry_do_not_use__ ServerMember auto */ 





const roleIconMap = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.GUEST]: null,
    [_prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.MODERATOR]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ShieldCheck */ .diB, {
        className: "h-4 w-4 ml-2 text-indigo-500"
    }),
    [_prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.ADMIN]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ShieldAlert */ .Ry6, {
        className: "h-4 w-4 ml-2 text-rose-500"
    })
};
const ServerMember = ({ member, server })=>{
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const icon = roleIconMap[member.role];
    const onClick = ()=>{
        router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1", params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_avatar__WEBPACK_IMPORTED_MODULE_2__/* .UserAvatar */ .Y, {
                src: member.profile.imageUrl,
                className: "h-8 w-8 md:h-8 md:w-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition", params?.memberId === member.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"),
                children: member.profile.name
            }),
            icon
        ]
    });
};


/***/ }),

/***/ 21851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ServerSearch: () => (/* binding */ ServerSearch)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/cmdk/dist/index.js
var dist = __webpack_require__(27754);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
// EXTERNAL MODULE: ./components/ui/dialog.tsx
var dialog = __webpack_require__(46696);
;// CONCATENATED MODULE: ./components/ui/command.tsx
/* __next_internal_client_entry_do_not_use__ Command,CommandDialog,CommandInput,CommandList,CommandEmpty,CommandGroup,CommandItem,CommandShortcut,CommandSeparator auto */ 





const Command = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command, {
        ref: ref,
        className: (0,utils.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }));
Command.displayName = dist.Command.displayName;
const CommandDialog = ({ children, ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.Vq, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* DialogContent */.cZ, {
            className: "overflow-hidden p-0 shadow-lg",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Command, {
                className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                children: children
            })
        })
    });
};
const CommandInput = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Search */.olm, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Input, {
                ref: ref,
                className: (0,utils.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    }));
CommandInput.displayName = dist.Command.Input.displayName;
const CommandList = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.List, {
        ref: ref,
        className: (0,utils.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }));
CommandList.displayName = dist.Command.List.displayName;
const CommandEmpty = /*#__PURE__*/ react_.forwardRef((props, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }));
CommandEmpty.displayName = dist.Command.Empty.displayName;
const CommandGroup = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Group, {
        ref: ref,
        className: (0,utils.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }));
CommandGroup.displayName = dist.Command.Group.displayName;
const CommandSeparator = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Separator, {
        ref: ref,
        className: (0,utils.cn)("-mx-1 h-px bg-border", className),
        ...props
    }));
CommandSeparator.displayName = dist.Command.Separator.displayName;
const CommandItem = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Item, {
        ref: ref,
        className: (0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props
    }));
CommandItem.displayName = dist.Command.Item.displayName;
const CommandShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (0,utils.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    });
};
CommandShortcut.displayName = "CommandShortcut";


;// CONCATENATED MODULE: ./components/server/server-search.tsx
/* __next_internal_client_entry_do_not_use__ ServerSearch auto */ 




const ServerSearch = ({ data })=>{
    const [open, setOpen] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const params = (0,navigation.useParams)();
    (0,react_.useEffect)(()=>{
        const down = (e)=>{
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open)=>!open);
            }
        };
        document.addEventListener("keydown", down);
        return ()=>document.removeEventListener("keydown", down);
    }, []);
    const onClick = ({ id, type })=>{
        setOpen(false);
        if (type === "member") {
            return router.push(`/servers/${params?.serverId}/conversations/${id}`);
        }
        if (type === "channel") {
            return router.push(`/servers/${params?.serverId}/channels/${id}`);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: ()=>setOpen(true),
                className: "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Search */.olm, {
                        className: "w-4 h-4 text-zinc-500 dark:text-zinc-400"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition",
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                        className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs",
                                children: "⌘"
                            }),
                            "K"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandDialog, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CommandInput, {
                        placeholder: "Search all channels and members"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CommandEmpty, {
                                children: "No Results found"
                            }),
                            data.map(({ label, type, data })=>{
                                if (!data?.length) return null;
                                return /*#__PURE__*/ jsx_runtime_.jsx(CommandGroup, {
                                    heading: label,
                                    children: data?.map(({ id, icon, name })=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandItem, {
                                            onSelect: ()=>onClick({
                                                    id,
                                                    type
                                                }),
                                            children: [
                                                icon,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: name
                                                })
                                            ]
                                        }, id);
                                    })
                                }, label);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 11508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSection: () => (/* binding */ ServerSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33504);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* harmony import */ var _components_action_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19481);
/* harmony import */ var _hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74038);
/* __next_internal_client_entry_do_not_use__ ServerSection auto */ 




const ServerSection = ({ label, role, sectionType, channelType, server })=>{
    const { onOpen } = (0,_hooks_use_modal_store__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between py-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400",
                children: label
            }),
            role !== _prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.GUEST && sectionType === "channels" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .ActionTooltip */ .M, {
                label: "Create Channel",
                side: "top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>onOpen("createChannel", {
                            channelType
                        }),
                    className: "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Plus */ .v37, {
                        className: "h-4 w-4"
                    })
                })
            }),
            role === _prisma_client__WEBPACK_IMPORTED_MODULE_3__.MemberRole.ADMIN && sectionType === "members" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .ActionTooltip */ .M, {
                label: "Manage Members",
                side: "top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>onOpen("members", {
                            server
                        }),
                    className: "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Settings */ .Zrf, {
                        className: "h-4 w-4"
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22299);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12857);
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const Separator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .f, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .f.displayName;



/***/ }),

/***/ 25538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54205);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93302);
/* harmony import */ var _lib_current_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78785);
/* harmony import */ var _components_server_server_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13310);






const ServerIdLayout = async ({ children, params })=>{
    const profile = await (0,_lib_current_profile__WEBPACK_IMPORTED_MODULE_3__/* .currentProfile */ .D)();
    if (!profile) {
        return (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__/* .redirectToSignIn */ .OX)();
    }
    const server = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    if (!server) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)("/");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_server_server_sidebar__WEBPACK_IMPORTED_MODULE_4__/* .ServerSidebar */ .Q, {
                    serverId: params.serverId
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "h-full md:pl-60",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerIdLayout);


/***/ }),

/***/ 55274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_navigation_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49288);


const MainLayout = async ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_navigation_sidebar__WEBPACK_IMPORTED_MODULE_1__/* .NavigationSidebar */ .A, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "md:pl-[72px] h-full",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);


/***/ }),

/***/ 49288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ NavigationSidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/client-boundary/uiComponents.js
var uiComponents = __webpack_require__(68422);
// EXTERNAL MODULE: ./components/ui/scroll-area.tsx
var scroll_area = __webpack_require__(55429);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/mode-toggle.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\mode-toggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ModeToggle"];

// EXTERNAL MODULE: ./components/ui/separator.tsx
var separator = __webpack_require__(32620);
// EXTERNAL MODULE: ./lib/current-profile.ts
var current_profile = __webpack_require__(78785);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(93302);
;// CONCATENATED MODULE: ./components/navigation/navigation-action.tsx

const navigation_action_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\navigation\navigation-action.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navigation_action_esModule, $$typeof: navigation_action_$$typeof } = navigation_action_proxy;
const navigation_action_default_ = navigation_action_proxy.default;

const navigation_action_e0 = navigation_action_proxy["NavigationAction"];

;// CONCATENATED MODULE: ./components/navigation/navigation-item.tsx

const navigation_item_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\navigation\navigation-item.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navigation_item_esModule, $$typeof: navigation_item_$$typeof } = navigation_item_proxy;
const navigation_item_default_ = navigation_item_proxy.default;

const navigation_item_e0 = navigation_item_proxy["NavigationItem"];

;// CONCATENATED MODULE: ./components/navigation/navigation-sidebar.tsx










const NavigationSidebar = async ()=>{
    const profile = await (0,current_profile/* currentProfile */.D)();
    if (!profile) {
        return (0,navigation.redirect)("/");
    }
    const servers = await db.db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_action_e0, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(separator/* Separator */.Z, {
                className: "h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(scroll_area/* ScrollArea */.x, {
                className: "flex-1 w-full",
                children: servers.map((server)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_item_e0, {
                            id: server.id,
                            name: server.name,
                            imageUrl: server.imageUrl
                        })
                    }, server.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pb-3 mt-auto flex items-center flex-col gap-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* UserButton */.l8, {
                        afterSignOutUrl: "/",
                        appearance: {
                            elements: {
                                avatarBox: "h-[48px] w-[48px]"
                            }
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 13310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ ServerSidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./components/ui/scroll-area.tsx
var scroll_area = __webpack_require__(55429);
// EXTERNAL MODULE: ./components/ui/separator.tsx
var separator = __webpack_require__(32620);
// EXTERNAL MODULE: ./lib/current-profile.ts
var current_profile = __webpack_require__(78785);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(93302);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/server/server-header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\server\server-header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ServerHeader"];

;// CONCATENATED MODULE: ./components/server/server-search.tsx

const server_search_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\server\server-search.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: server_search_esModule, $$typeof: server_search_$$typeof } = server_search_proxy;
const server_search_default_ = server_search_proxy.default;

const server_search_e0 = server_search_proxy["ServerSearch"];

;// CONCATENATED MODULE: ./components/server/server-section.tsx

const server_section_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\server\server-section.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: server_section_esModule, $$typeof: server_section_$$typeof } = server_section_proxy;
const server_section_default_ = server_section_proxy.default;

const server_section_e0 = server_section_proxy["ServerSection"];

;// CONCATENATED MODULE: ./components/server/server-channel.tsx

const server_channel_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\server\server-channel.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: server_channel_esModule, $$typeof: server_channel_$$typeof } = server_channel_proxy;
const server_channel_default_ = server_channel_proxy.default;

const server_channel_e0 = server_channel_proxy["ServerChannel"];

;// CONCATENATED MODULE: ./components/server/server-member.tsx

const server_member_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\server\server-member.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: server_member_esModule, $$typeof: server_member_$$typeof } = server_member_proxy;
const server_member_default_ = server_member_proxy.default;

const server_member_e0 = server_member_proxy["ServerMember"];

;// CONCATENATED MODULE: ./components/server/server-sidebar.tsx













const iconMap = {
    [client_.ChannelType.TEXT]: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Hash */.kbs, {
        className: "mr-2 h-4 w-4"
    }),
    [client_.ChannelType.AUDIO]: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Mic */.uc7, {
        className: "mr-2 h-4 w-4"
    }),
    [client_.ChannelType.VIDEO]: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Video */.nkn, {
        className: "mr-2 h-4 w-4"
    })
};
const roleIconMap = {
    [client_.MemberRole.GUEST]: null,
    [client_.MemberRole.MODERATOR]: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ShieldCheck */.diB, {
        className: "h-4 w-4 mr-2 text-indigo-500"
    }),
    [client_.MemberRole.ADMIN]: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ShieldAlert */.Ry6, {
        className: "h-4 w-4 mr-2 text-rose-500"
    })
};
const ServerSidebar = async ({ serverId })=>{
    const profile = await (0,current_profile/* currentProfile */.D)();
    if (!profile) {
        return (0,navigation.redirect)("/");
    }
    const server = await db.db.server.findUnique({
        where: {
            id: serverId
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: "asc"
                }
            },
            members: {
                include: {
                    profile: true
                },
                orderBy: {
                    role: "asc"
                }
            }
        }
    });
    const textChannels = server?.channels.filter((channel)=>channel.type === client_.ChannelType.TEXT);
    const audioChannels = server?.channels.filter((channel)=>channel.type === client_.ChannelType.AUDIO);
    const videoChannels = server?.channels.filter((channel)=>channel.type === client_.ChannelType.VIDEO);
    const members = server?.members.filter((member)=>member.profileId !== profile.id);
    if (!server) {
        return (0,navigation.redirect)("/");
    }
    const role = server.members.find((member)=>member.profileId === profile.id)?.role;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                server: server,
                role: role
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(scroll_area/* ScrollArea */.x, {
                className: "flex-1 px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(server_search_e0, {
                            data: [
                                {
                                    label: "Text Channels",
                                    type: "channel",
                                    data: textChannels?.map((channel)=>({
                                            id: channel.id,
                                            name: channel.name,
                                            icon: iconMap[channel.type]
                                        }))
                                },
                                {
                                    label: "Voice Channels",
                                    type: "channel",
                                    data: audioChannels?.map((channel)=>({
                                            id: channel.id,
                                            name: channel.name,
                                            icon: iconMap[channel.type]
                                        }))
                                },
                                {
                                    label: "Video Channels",
                                    type: "channel",
                                    data: videoChannels?.map((channel)=>({
                                            id: channel.id,
                                            name: channel.name,
                                            icon: iconMap[channel.type]
                                        }))
                                },
                                {
                                    label: "Members",
                                    type: "member",
                                    data: members?.map((member)=>({
                                            id: member.id,
                                            name: member.profile.name,
                                            icon: roleIconMap[member.role]
                                        }))
                                }
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(separator/* Separator */.Z, {
                        className: "bg-zinc-200 dark:bg-zinc-700 rounded-md my-2"
                    }),
                    !!textChannels?.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(server_section_e0, {
                                sectionType: "channels",
                                channelType: client_.ChannelType.TEXT,
                                role: role,
                                label: "Text Channels"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-[2px]",
                                children: textChannels.map((channel)=>/*#__PURE__*/ jsx_runtime_.jsx(server_channel_e0, {
                                        channel: channel,
                                        role: role,
                                        server: server
                                    }, channel.id))
                            })
                        ]
                    }),
                    !!audioChannels?.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(server_section_e0, {
                                sectionType: "channels",
                                channelType: client_.ChannelType.AUDIO,
                                role: role,
                                label: "Voice Channels"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-[2px]",
                                children: audioChannels.map((channel)=>/*#__PURE__*/ jsx_runtime_.jsx(server_channel_e0, {
                                        channel: channel,
                                        role: role,
                                        server: server
                                    }, channel.id))
                            })
                        ]
                    }),
                    !!videoChannels?.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(server_section_e0, {
                                sectionType: "channels",
                                channelType: client_.ChannelType.VIDEO,
                                role: role,
                                label: "Video Channels"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-[2px]",
                                children: videoChannels.map((channel)=>/*#__PURE__*/ jsx_runtime_.jsx(server_channel_e0, {
                                        channel: channel,
                                        role: role,
                                        server: server
                                    }, channel.id))
                            })
                        ]
                    }),
                    !!members?.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(server_section_e0, {
                                sectionType: "members",
                                role: role,
                                label: "Members",
                                server: server
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-[2px]",
                                children: members.map((member)=>/*#__PURE__*/ jsx_runtime_.jsx(server_member_e0, {
                                        member: member,
                                        server: server
                                    }, member.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 55429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ e0)
/* harmony export */ });
/* unused harmony export ScrollBar */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\ui\scroll-area.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ScrollArea"];

const e1 = proxy["ScrollBar"];


/***/ }),

/***/ 32620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\ui\separator.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Separator"];


/***/ })

};
;