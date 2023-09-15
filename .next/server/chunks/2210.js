exports.id = 2210;
exports.ids = [2210];
exports.modules = {

/***/ 8135:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84102));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64092));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73108));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77984));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 451));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27467));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69449));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17668));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83748));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11508));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21851));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14510));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53824));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99904));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59943));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86221));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20945));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94451));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50651))

/***/ }),

/***/ 50651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ChatInput: () => (/* binding */ ChatInput)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(19098);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/query-string/index.js + 4 modules
var query_string = __webpack_require__(47339);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(83894);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./components/ui/form.tsx
var ui_form = __webpack_require__(80470);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(5538);
// EXTERNAL MODULE: ./hooks/use-modal-store.ts
var use_modal_store = __webpack_require__(74038);
// EXTERNAL MODULE: ./node_modules/@emoji-mart/react/dist/main.js
var main = __webpack_require__(85843);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./node_modules/@emoji-mart/data/sets/14/native.json
var _14_native = __webpack_require__(28464);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-popover/dist/index.mjs
var react_popover_dist = __webpack_require__(12820);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./components/ui/popover.tsx
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent auto */ 



const Popover = react_popover_dist/* Root */.fC;
const PopoverTrigger = react_popover_dist/* Trigger */.xz;
const PopoverContent = /*#__PURE__*/ react_.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_popover_dist/* Portal */.h_, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_popover_dist/* Content */.VY, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,utils.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = react_popover_dist/* Content */.VY.displayName;


;// CONCATENATED MODULE: ./components/emoji-picker.tsx
/* __next_internal_client_entry_do_not_use__ EmojiPicker auto */ 





const EmojiPicker = ({ onChange })=>{
    const { resolvedTheme } = (0,dist/* useTheme */.F)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Popover, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PopoverTrigger, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Smile */.WKj, {
                    className: "text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopoverContent, {
                side: "right",
                sideOffset: 40,
                className: "bg-transparent border-none shadow-none drop-shadow-none mb-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx((main_default()), {
                    theme: resolvedTheme,
                    data: _14_native,
                    onEmojiSelect: (emoji)=>onChange(emoji.native)
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/chat/chat-input.tsx
/* __next_internal_client_entry_do_not_use__ ChatInput auto */ 











const formSchema = lib/* object */.Ry({
    content: lib/* string */.Z_().min(1)
});
const ChatInput = ({ apiUrl, query, name, type })=>{
    const { onOpen } = (0,use_modal_store/* useModal */.d)();
    const router = (0,navigation.useRouter)();
    const form = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod/* zodResolver */.F)(formSchema),
        defaultValues: {
            content: ""
        }
    });
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values)=>{
        try {
            const url = query_string/* default */.Z.stringifyUrl({
                url: apiUrl,
                query
            });
            await axios/* default */.Z.post(url, values);
            form.reset();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* Form */.l0, {
        ...form,
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: form.handleSubmit(onSubmit),
            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                control: form.control,
                name: "content",
                render: ({ field })=>/*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormItem */.xJ, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative p-4 pb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: ()=>onOpen("messageFile", {
                                                apiUrl,
                                                query
                                            }),
                                        className: "absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Plus */.v37, {
                                            className: "text-white dark:text-[#313338]"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                        disabled: isLoading,
                                        className: "px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200",
                                        placeholder: `Message ${type === "conversation" ? name : "#" + name}`,
                                        ...field
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute top-7 right-8",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(EmojiPicker, {
                                            onChange: (emoji)=>field.onChange(`${field.value} ${emoji}`)
                                        })
                                    })
                                ]
                            })
                        })
                    })
            })
        })
    });
};


/***/ }),

/***/ 94451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ChatMessages: () => (/* binding */ ChatMessages)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 35 modules
var format = __webpack_require__(11866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/query-string/index.js + 4 modules
var query_string = __webpack_require__(47339);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs + 9 modules
var useInfiniteQuery = __webpack_require__(71206);
// EXTERNAL MODULE: ./components/providers/socket-provider.tsx
var socket_provider = __webpack_require__(93105);
;// CONCATENATED MODULE: ./hooks/use-chat-query.ts



const useChatQuery = ({ queryKey, apiUrl, paramKey, paramValue })=>{
    const { isConnected } = (0,socket_provider.useSocket)();
    const fetchMessages = async ({ pageParam = undefined })=>{
        const url = query_string/* default */.Z.stringifyUrl({
            url: apiUrl,
            query: {
                cursor: pageParam,
                [paramKey]: paramValue
            }
        }, {
            skipNull: true
        });
        const res = await fetch(url);
        return res.json();
    };
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        queryKey: [
            queryKey
        ],
        queryFn: fetchMessages,
        getNextPageParam: (lastPage)=>lastPage?.nextCursor,
        refetchInterval: isConnected ? false : 1000
    });
    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    };
};

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(212);
;// CONCATENATED MODULE: ./hooks/use-chat-socket.ts



const useChatSocket = ({ addKey, updateKey, queryKey })=>{
    const { socket } = (0,socket_provider.useSocket)();
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    (0,react_.useEffect)(()=>{
        if (!socket) {
            return;
        }
        socket.on(updateKey, (message)=>{
            queryClient.setQueryData([
                queryKey
            ], (oldData)=>{
                if (!oldData || !oldData.pages || oldData.pages.length === 0) {
                    return oldData;
                }
                const newData = oldData.pages.map((page)=>{
                    return {
                        ...page,
                        items: page.items.map((item)=>{
                            if (item.id === message.id) {
                                return message;
                            }
                            return item;
                        })
                    };
                });
                return {
                    ...oldData,
                    pages: newData
                };
            });
        });
        socket.on(addKey, (message)=>{
            queryClient.setQueryData([
                queryKey
            ], (oldData)=>{
                if (!oldData || !oldData.pages || oldData.pages.length === 0) {
                    return {
                        pages: [
                            {
                                items: [
                                    message
                                ]
                            }
                        ]
                    };
                }
                const newData = [
                    ...oldData.pages
                ];
                newData[0] = {
                    ...newData[0],
                    items: [
                        message,
                        ...newData[0].items
                    ]
                };
                return {
                    ...oldData,
                    pages: newData
                };
            });
        });
        return ()=>{
            socket.off(addKey);
            socket.off(updateKey);
        };
    }, [
        queryClient,
        addKey,
        queryKey,
        socket,
        updateKey
    ]);
};

;// CONCATENATED MODULE: ./hooks/use-chat-scroll.ts

const useChatScroll = ({ chatRef, bottomRef, shouldLoadMore, loadMore, count })=>{
    const [hasInitialized, setHasInitialized] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const topDiv = chatRef?.current;
        const handleScroll = ()=>{
            const scrollTop = topDiv?.scrollTop;
            if (scrollTop === 0 && shouldLoadMore) {
                loadMore();
            }
        };
        topDiv?.addEventListener("scroll", handleScroll);
        return ()=>{
            topDiv?.removeEventListener("scroll", handleScroll);
        };
    }, [
        shouldLoadMore,
        loadMore,
        chatRef
    ]);
    (0,react_.useEffect)(()=>{
        const bottomDiv = bottomRef?.current;
        const topDiv = chatRef.current;
        const shouldAutoScroll = ()=>{
            if (!hasInitialized && bottomDiv) {
                setHasInitialized(true);
                return true;
            }
            if (!topDiv) {
                return false;
            }
            const distanceFromBottom = topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight;
            return distanceFromBottom <= 100;
        };
        if (shouldAutoScroll()) {
            setTimeout(()=>{
                bottomRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100);
        }
    }, [
        bottomRef,
        chatRef,
        count,
        hasInitialized
    ]);
};

;// CONCATENATED MODULE: ./components/chat/chat-welcome.tsx


const ChatWelcome = ({ name, type })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2 px-4 mb-4",
        children: [
            type === "channel" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Hash */.kbs, {
                    className: "h-12 w-12 text-white"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xl md:text-3xl font-bold",
                children: [
                    type === "channel" ? "Welcome to #" : "",
                    name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-zinc-600 dark:text-zinc-400 text-sm",
                children: type === "channel" ? `This is the start of the #${name} channel.` : `This is the start of your conversation with ${name}`
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(19098);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(83894);
// EXTERNAL MODULE: ./node_modules/@prisma/client/index.js
var client = __webpack_require__(33504);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./components/user-avatar.tsx
var user_avatar = __webpack_require__(20410);
// EXTERNAL MODULE: ./components/action-tooltip.tsx + 1 modules
var action_tooltip = __webpack_require__(19481);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
// EXTERNAL MODULE: ./components/ui/form.tsx
var ui_form = __webpack_require__(80470);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(5538);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(44368);
// EXTERNAL MODULE: ./hooks/use-modal-store.ts
var use_modal_store = __webpack_require__(74038);
;// CONCATENATED MODULE: ./components/chat/chat-item.tsx
/* __next_internal_client_entry_do_not_use__ ChatItem auto */ 

















const roleIconMap = {
    "GUEST": null,
    "MODERATOR": /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ShieldCheck */.diB, {
        className: "h-4 w-4 ml-2 text-indigo-500"
    }),
    "ADMIN": /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ShieldAlert */.Ry6, {
        className: "h-4 w-4 ml-2 text-rose-500"
    })
};
const formSchema = lib/* object */.Ry({
    content: lib/* string */.Z_().min(1)
});
const ChatItem = ({ id, content, member, timestamp, fileUrl, deleted, currentMember, isUpdated, socketUrl, socketQuery })=>{
    const [isEditing, setIsEditing] = (0,react_.useState)(false);
    const { onOpen } = (0,use_modal_store/* useModal */.d)();
    const params = (0,navigation.useParams)();
    const router = (0,navigation.useRouter)();
    const onMemberClick = ()=>{
        if (member.id === currentMember.id) {
            return;
        }
        router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
    };
    (0,react_.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === "Escape" || event.keyCode === 27) {
                setIsEditing(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keyDown", handleKeyDown);
    }, []);
    const form = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod/* zodResolver */.F)(formSchema),
        defaultValues: {
            content: content
        }
    });
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values)=>{
        try {
            const url = query_string/* default */.Z.stringifyUrl({
                url: `${socketUrl}/${id}`,
                query: socketQuery
            });
            await axios/* default */.Z.patch(url, values);
            form.reset();
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };
    (0,react_.useEffect)(()=>{
        form.reset({
            content: content
        });
    }, [
        content
    ]);
    const fileType = fileUrl?.split(".").pop();
    const isAdmin = currentMember.role === client.MemberRole.ADMIN;
    const isModerator = currentMember.role === client.MemberRole.MODERATOR;
    const isOwner = currentMember.id === member.id;
    const canDeleteMessage = !deleted && (isAdmin || isModerator || isOwner);
    const canEditMessage = !deleted && isOwner && !fileUrl;
    const isPDF = fileType === "pdf" && fileUrl;
    const isImage = !isPDF && fileUrl;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative group flex items-center hover:bg-black/5 p-4 transition w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "group flex gap-x-2 items-start w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: onMemberClick,
                        className: "cursor-pointer hover:drop-shadow-md transition",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(user_avatar/* UserAvatar */.Y, {
                            src: member.profile.imageUrl
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-x-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                onClick: onMemberClick,
                                                className: "font-semibold text-sm hover:underline cursor-pointer",
                                                children: member.profile.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(action_tooltip/* ActionTooltip */.M, {
                                                label: member.role,
                                                children: roleIconMap[member.role]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: timestamp
                                    })
                                ]
                            }),
                            isImage && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: fileUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "relative aspect-square rounded-md mt-2 overflow-hidden border flex items-center bg-secondary h-48 w-48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: fileUrl,
                                    alt: content,
                                    fill: true,
                                    className: "object-cover"
                                })
                            }),
                            isPDF && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex items-center p-2 mt-2 rounded-md bg-background/10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* FileIcon */.aAW, {
                                        className: "h-10 w-10 fill-indigo-200 stroke-indigo-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: fileUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline",
                                        children: "PDF File"
                                    })
                                ]
                            }),
                            !fileUrl && !isEditing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (0,utils.cn)("text-sm text-zinc-600 dark:text-zinc-300", deleted && "italic text-zinc-500 dark:text-zinc-400 text-xs mt-1"),
                                children: [
                                    content,
                                    isUpdated && !deleted && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-[10px] mx-2 text-zinc-500 dark:text-zinc-400",
                                        children: "(edited)"
                                    })
                                ]
                            }),
                            !fileUrl && isEditing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_form/* Form */.l0, {
                                ...form,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "flex items-center w-full gap-x-2 pt-2",
                                        onSubmit: form.handleSubmit(onSubmit),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                                                control: form.control,
                                                name: "content",
                                                render: ({ field })=>/*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormItem */.xJ, {
                                                        className: "flex-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "relative w-full",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                                                    disabled: isLoading,
                                                                    className: "p-2 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200",
                                                                    placeholder: "Edited message",
                                                                    ...field
                                                                })
                                                            })
                                                        })
                                                    })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                                disabled: isLoading,
                                                size: "sm",
                                                variant: "primary",
                                                children: "Save"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-[10px] mt-1 text-zinc-400",
                                        children: "Press escape to cancel, enter to save"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            canDeleteMessage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800 border rounded-sm",
                children: [
                    canEditMessage && /*#__PURE__*/ jsx_runtime_.jsx(action_tooltip/* ActionTooltip */.M, {
                        label: "Edit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Edit */.I8b, {
                            onClick: ()=>setIsEditing(true),
                            className: "cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(action_tooltip/* ActionTooltip */.M, {
                        label: "Delete",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Trash */.rFk, {
                            onClick: ()=>onOpen("deleteMessage", {
                                    apiUrl: `${socketUrl}/${id}`,
                                    query: socketQuery
                                }),
                            className: "cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/chat/chat-messages.tsx
/* __next_internal_client_entry_do_not_use__ ChatMessages auto */ 








const DATE_FORMAT = "d MMM yyyy, HH:mm";
const ChatMessages = ({ name, member, chatId, apiUrl, socketUrl, socketQuery, paramKey, paramValue, type })=>{
    const queryKey = `chat:${chatId}`;
    const addKey = `chat:${chatId}:messages`;
    const updateKey = `chat:${chatId}:messages:update`;
    const chatRef = (0,react_.useRef)(null);
    const bottomRef = (0,react_.useRef)(null);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useChatQuery({
        queryKey,
        apiUrl,
        paramKey,
        paramValue
    });
    useChatSocket({
        queryKey,
        addKey,
        updateKey
    });
    useChatScroll({
        chatRef,
        bottomRef,
        loadMore: fetchNextPage,
        shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
        count: data?.pages?.[0]?.items?.length ?? 0
    });
    if (status === "loading") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col flex-1 justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Loader2 */.zM5, {
                    className: "h-7 w-7 text-zinc-500 animate-spin my-4"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                    children: "Loading messages..."
                })
            ]
        });
    }
    if (status === "error") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col flex-1 justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ServerCrash */.S$G, {
                    className: "h-7 w-7 text-zinc-500 my-4"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                    children: "Something went wrong!"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: chatRef,
        className: "flex-1 flex flex-col py-4 overflow-y-auto",
        children: [
            !hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-1"
            }),
            !hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx(ChatWelcome, {
                type: type,
                name: name
            }),
            hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center",
                children: isFetchingNextPage ? /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Loader2 */.zM5, {
                    className: "h-6 w-6 text-zinc-500 animate-spin my-4"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>fetchNextPage(),
                    className: "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 text-xs my-4 dark:hover:text-zinc-300 transition",
                    children: "Load previous messages"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col-reverse mt-auto",
                children: data?.pages?.map((group, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Fragment, {
                        children: group.items.map((message)=>/*#__PURE__*/ jsx_runtime_.jsx(ChatItem, {
                                id: message.id,
                                currentMember: member,
                                member: message.member,
                                content: message.content,
                                fileUrl: message.fileUrl,
                                deleted: message.deleted,
                                timestamp: (0,format/* default */.Z)(new Date(message.createdAt), DATE_FORMAT),
                                isUpdated: message.updatedAt !== message.createdAt,
                                socketUrl: socketUrl,
                                socketQuery: socketQuery
                            }, message.id))
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: bottomRef
            })
        ]
    });
};


/***/ }),

/***/ 86221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatVideoButton: () => (/* binding */ ChatVideoButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47339);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* harmony import */ var _components_action_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19481);
/* __next_internal_client_entry_do_not_use__ ChatVideoButton auto */ 




const ChatVideoButton = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    const isVideo = searchParams?.get("video");
    const onClick = ()=>{
        const url = query_string__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.stringifyUrl({
            url: pathname || "",
            query: {
                video: isVideo ? undefined : true
            }
        }, {
            skipNull: true
        });
        router.push(url);
    };
    const Icon = isVideo ? lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .VideoOff */ .pYS : lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Video */ .nkn;
    const tooltipLabel = isVideo ? "End video call" : "Start video call";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_action_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .ActionTooltip */ .M, {
        side: "bottom",
        label: tooltipLabel,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            className: "hover:opacity-75 transition mr-4",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "h-6 w-6 text-zinc-500 dark:text-zinc-400"
            })
        })
    });
};


/***/ }),

/***/ 73108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaRoom: () => (/* binding */ MediaRoom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _livekit_components_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94484);
/* harmony import */ var _livekit_components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76894);
/* harmony import */ var _livekit_components_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_livekit_components_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64470);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* __next_internal_client_entry_do_not_use__ MediaRoom auto */ 





const MediaRoom = ({ chatId, video, audio })=>{
    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .aF)();
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user?.firstName || !user?.lastName) return;
        const name = `${user.firstName} ${user.lastName}`;
        (async ()=>{
            try {
                const resp = await fetch(`/api/livekit?room=${chatId}&username=${name}`);
                const data = await resp.json();
                setToken(data.token);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [
        user?.firstName,
        user?.lastName,
        chatId
    ]);
    if (token === "") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col flex-1 justify-center items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Loader2 */ .zM5, {
                    className: "h-7 w-7 text-zinc-500 animate-spin my-4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                    children: "Loading..."
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_livekit_components_react__WEBPACK_IMPORTED_MODULE_5__/* .LiveKitRoom */ .IC, {
        "data-lk-theme": "default",
        serverUrl: "wss://team-work-application-z3q04nxn.livekit.cloud",
        token: token,
        connect: true,
        video: video,
        audio: audio,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_livekit_components_react__WEBPACK_IMPORTED_MODULE_5__/* .VideoConference */ .zc, {})
    });
};


/***/ }),

/***/ 20945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SocketIndicator: () => (/* binding */ SocketIndicator)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/providers/socket-provider.tsx
var socket_provider = __webpack_require__(93105);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(91971);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,dist/* cva */.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


;// CONCATENATED MODULE: ./components/socket-indicator.tsx
/* __next_internal_client_entry_do_not_use__ SocketIndicator auto */ 


const SocketIndicator = ()=>{
    const { isConnected } = (0,socket_provider.useSocket)();
    if (!isConnected) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
            variant: "outline",
            className: "bg-yellow-600 text-white border-none",
            children: "Fallback: Polling every 1s"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
        variant: "outline",
        className: "bg-emerald-600 text-white border-none",
        children: "Live: Real-time updates"
    });
};


/***/ }),

/***/ 99904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sheet: () => (/* binding */ Sheet),
/* harmony export */   SheetClose: () => (/* binding */ SheetClose),
/* harmony export */   SheetContent: () => (/* binding */ SheetContent),
/* harmony export */   SheetDescription: () => (/* binding */ SheetDescription),
/* harmony export */   SheetFooter: () => (/* binding */ SheetFooter),
/* harmony export */   SheetHeader: () => (/* binding */ SheetHeader),
/* harmony export */   SheetTitle: () => (/* binding */ SheetTitle),
/* harmony export */   SheetTrigger: () => (/* binding */ SheetTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7589);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91971);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51158);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12857);
/* __next_internal_client_entry_do_not_use__ Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription auto */ 





const Sheet = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const SheetTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const SheetClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8;
const SheetPortal = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(className),
        ...props
    });
SheetPortal.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_.displayName;
const SheetOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }));
SheetOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV.displayName;
const sheetVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__/* .cva */ .j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SheetOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
SheetContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold text-foreground", className),
        ...props
    }));
SheetTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx.displayName;
const SheetDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
SheetDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk.displayName;



/***/ }),

/***/ 21052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ ChatHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/ui/sheet.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\ui\sheet.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Sheet"];

const e1 = proxy["SheetTrigger"];

const e2 = proxy["SheetClose"];

const e3 = proxy["SheetContent"];

const e4 = proxy["SheetHeader"];

const e5 = proxy["SheetFooter"];

const e6 = proxy["SheetTitle"];

const e7 = proxy["SheetDescription"];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(3809);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(78668);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(85839);
;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            primary: "bg-indigo-500 text-white hover:bg-indigo-500/90"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./components/navigation/navigation-sidebar.tsx + 3 modules
var navigation_sidebar = __webpack_require__(49288);
// EXTERNAL MODULE: ./components/server/server-sidebar.tsx + 5 modules
var server_sidebar = __webpack_require__(13310);
;// CONCATENATED MODULE: ./components/mobile-toggle.tsx






const MobileToggle = ({ serverId })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e3, {
                side: "left",
                className: "p-0 flex gap-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[72px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_sidebar/* NavigationSidebar */.A, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(server_sidebar/* ServerSidebar */.Q, {
                        serverId: serverId
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ui/avatar.tsx

const avatar_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\ui\avatar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: avatar_esModule, $$typeof: avatar_$$typeof } = avatar_proxy;
const avatar_default_ = avatar_proxy.default;

const avatar_e0 = avatar_proxy["Avatar"];

const avatar_e1 = avatar_proxy["AvatarImage"];

const avatar_e2 = avatar_proxy["AvatarFallback"];

;// CONCATENATED MODULE: ./components/user-avatar.tsx



const UserAvatar = ({ src, className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(avatar_e0, {
        className: (0,utils.cn)("h-7 w-7 md:h-10 md:w-10", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx(avatar_e1, {
            src: src
        })
    });
};

;// CONCATENATED MODULE: ./components/socket-indicator.tsx

const socket_indicator_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\socket-indicator.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: socket_indicator_esModule, $$typeof: socket_indicator_$$typeof } = socket_indicator_proxy;
const socket_indicator_default_ = socket_indicator_proxy.default;

const socket_indicator_e0 = socket_indicator_proxy["SocketIndicator"];

;// CONCATENATED MODULE: ./components/chat/chat-video-button.tsx

const chat_video_button_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\chat\chat-video-button.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: chat_video_button_esModule, $$typeof: chat_video_button_$$typeof } = chat_video_button_proxy;
const chat_video_button_default_ = chat_video_button_proxy.default;

const chat_video_button_e0 = chat_video_button_proxy["ChatVideoButton"];

;// CONCATENATED MODULE: ./components/chat/chat-header.tsx






const ChatHeader = ({ serverId, name, type, imageUrl })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileToggle, {
                serverId: serverId
            }),
            type === "channel" && /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Hash */.kbs, {
                className: "w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"
            }),
            type === "conversation" && /*#__PURE__*/ jsx_runtime_.jsx(UserAvatar, {
                src: imageUrl,
                className: "h-8 w-8 md:h-8 md:w-8 mr-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-semibold text-md text-black dark:text-white",
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto flex items-center",
                children: [
                    type === "conversation" && /*#__PURE__*/ jsx_runtime_.jsx(chat_video_button_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(socket_indicator_e0, {})
                ]
            })
        ]
    });
};


/***/ }),

/***/ 93584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\chat\chat-input.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ChatInput"];


/***/ }),

/***/ 35290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\chat\chat-messages.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ChatMessages"];


/***/ }),

/***/ 96704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hassa\OneDrive\Desktop\discord\components\media-room.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["MediaRoom"];


/***/ })

};
;