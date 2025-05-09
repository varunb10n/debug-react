var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import Header from "./Header";
import "./../style.css";
const Display = (_a) => {
    var { type } = _a, rest = __rest(_a, ["type"]);
    switch (type) {
        case "raw":
            return (_jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", children: _jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: JSON.stringify(rest, undefined, 4) }) }));
        case "formatted":
            return (_jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", children: _jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: "..." }) }));
    }
};
export const Log = (props) => {
    var _a, _b;
    const [open, setOpen] = useState((_a = props.open) !== null && _a !== void 0 ? _a : true);
    const [type, setType] = useState((_b = props.type) !== null && _b !== void 0 ? _b : "raw");
    const handleOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const handleType = useCallback(() => {
        setType((prev) => (prev === "raw" ? "formatted" : "raw"));
    }, []);
    return (_jsxs("span", { style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: open ? "8px" : "0",
        }, className: `flex flex-col w-inherit font-inherit border border-solid border-d1d9e0 rounded-sm`, children: [_jsx(Header, { open: open, type: type, handleOpen: handleOpen, handleType: handleType }), open && _jsx(Display, Object.assign({ type: type }, props))] }));
};
