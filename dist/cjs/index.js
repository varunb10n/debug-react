'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is null or undefined, else `false`.
 */
const isNil = (value) => value === null || value === undefined;
/**
 *
 * @param value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
const isObject = (value) => {
    const type = typeof value;
    return (!isNil(value) &&
        type === "object" &&
        !Array.isArray(value) &&
        !(value instanceof Function));
};

const Header = (props) => {
    return (jsxRuntime.jsxs("span", { style: { paddingTop: "8px", paddingBottom: "8px" }, className: "flex justify-between", children: [jsxRuntime.jsx("small", { children: props.title }), jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [props.open && (jsxRuntime.jsx("button", { type: "button", onClick: props.handleType, style: {
                            fontFamily: "inherit",
                            fontSize: "12px",
                            border: "1px solid #d1d9e0",
                            borderRadius: "4px",
                            outline: "none",
                            backgroundColor: "#fff",
                            color: "#4a5565",
                        }, children: props.type })), props.open ? (jsxRuntime.jsx("span", { className: "flex font-bold text-xs cursor-pointer", onClick: props.handleOpen, style: {
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "1px solid #d1d9e0",
                            justifyContent: "center",
                            alignItems: "center",
                            userSelect: "none",
                            color: "#4a5565",
                        }, children: "\u268A" })) : (jsxRuntime.jsx("span", { className: "font-bold text-xxs cursor-pointer", onClick: props.handleOpen, style: {
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "1px solid #d1d9e0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            userSelect: "none",
                            color: "#4a5565",
                        }, children: "\u271A" }))] })] }));
};
const Formatted = (props) => {
    const renderFormatted = (obj, depth = 0, path = "") => {
        return Object.entries(obj).flatMap(([key, value]) => {
            const marginLeft = depth * 16;
            const currentPath = path ? `${path}.${key}` : key;
            if (isObject(value)) {
                return [
                    jsxRuntime.jsx("pre", { className: "m-0 whitespace-pre-wrap break-words rounded-sm p-2", style: { backgroundColor: "#f6f8fa", marginLeft }, children: jsxRuntime.jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: key }) }, currentPath),
                    ...renderFormatted(value, depth + 1, currentPath),
                ];
            }
            return (jsxRuntime.jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", style: { backgroundColor: "#f6f8fa", marginLeft }, children: jsxRuntime.jsxs("code", { className: "text-xs", style: { color: "#4a5565" }, children: [key, ": ", String(value)] }) }, currentPath));
        });
    };
    if (!isObject(props))
        return null;
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: renderFormatted(props) });
};
const Display = ({ type, ...rest }) => {
    switch (type) {
        case "raw":
            return (jsxRuntime.jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", children: jsxRuntime.jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: JSON.stringify(rest, undefined, 4) }) }));
        case "formatted":
            return jsxRuntime.jsx(Formatted, { ...rest });
    }
};
const Log = (props) => {
    const [open, setOpen] = react.useState(props.open ?? true);
    const [type, setType] = react.useState(props.type ?? "raw");
    const handleOpen = react.useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const handleType = react.useCallback(() => {
        setType((prev) => (prev === "raw" ? "formatted" : "raw"));
    }, []);
    return (jsxRuntime.jsxs("span", { style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: open ? "8px" : "0",
        }, className: `flex flex-col w-inherit font-inherit border border-solid border-d1d9e0 rounded-sm`, children: [jsxRuntime.jsx(Header, { open: open, type: type, handleOpen: handleOpen, handleType: handleType }), open && (jsxRuntime.jsx("span", { children: jsxRuntime.jsx(Display, { type: type, ...props.data }) }))] }));
};

exports.Log = Log;
//# sourceMappingURL=index.js.map
