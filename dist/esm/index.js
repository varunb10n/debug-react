import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".m-0 {\n  margin: 0;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.break-words {\n  word-break: break-word;\n}\n.w-inherit {\n  width: inherit;\n}\n.w-full {\n  width: 100%;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-between {\n  align-content: space-between;\n}\n.items-center {\n  align-items: center;\n}\n.gap-1 {\n  gap: 0.25rem; /* 4px */\n}\n.font-inherit {\n  font-family: inherit;\n}\n.font-bold {\n  font-weight: 700;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.bg-f6f8fa {\n  background-color: #f6f8fa;\n}\n.rounded-sm {\n  border-radius: 0.25rem; /* 4px */\n}\n.inline-bock {\n  display: inline-block;\n}\n.border {\n  border-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-d1d9e0 {\n  border-color: #d1d9e0;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.text-xxs {\n  font-size: 0.5rem; /* 8px */\n}\n.text-xs {\n  font-size: 0.75rem; /* 12px */\n}\n.text-base {\n  font-size: 1rem; /* 16px */\n}\n.text-white {\n  color: #fff;\n}\n";
styleInject(css_248z);

const Header = (props) => {
    return (jsxs("span", { style: { paddingTop: "8px", paddingBottom: "8px" }, className: "flex justify-between", children: [jsx("small", { children: props.title }), jsxs("span", { className: "flex items-center gap-1", children: [props.open && (jsx("button", { type: "button", onClick: props.handleType, style: {
                            fontFamily: "inherit",
                            fontSize: "12px",
                            border: "1px solid #d1d9e0",
                            borderRadius: "4px",
                            outline: "none",
                            backgroundColor: "#fff",
                            color: "#4a5565",
                        }, children: props.type })), props.open ? (jsx("span", { className: "flex font-bold text-xs cursor-pointer", onClick: props.handleOpen, style: {
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "1px solid #d1d9e0",
                            justifyContent: "center",
                            alignItems: "center",
                            userSelect: "none",
                            color: "#4a5565",
                        }, children: "\u268A" })) : (jsx("span", { className: "font-bold text-xxs cursor-pointer", onClick: props.handleOpen, style: {
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
                    jsx("pre", { className: "m-0 whitespace-pre-wrap break-words rounded-sm p-2", style: { backgroundColor: "#f6f8fa", marginLeft }, children: jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: key }) }, currentPath),
                    ...renderFormatted(value, depth + 1, currentPath),
                ];
            }
            return (jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", style: { backgroundColor: "#f6f8fa", marginLeft }, children: jsxs("code", { className: "text-xs", style: { color: "#4a5565" }, children: [key, ": ", String(value)] }) }, currentPath));
        });
    };
    if (!isObject(props))
        return null;
    return jsx(Fragment, { children: renderFormatted(props) });
};
const Display = ({ type, ...rest }) => {
    switch (type) {
        case "raw":
            return (jsx("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm", children: jsx("code", { className: "text-xs", style: { color: "#4a5565" }, children: JSON.stringify(rest, undefined, 4) }) }));
        case "formatted":
            return jsx(Formatted, { ...rest });
    }
};
const Log = (props) => {
    const [open, setOpen] = useState(props.open ?? true);
    const [type, setType] = useState(props.type ?? "raw");
    const handleOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const handleType = useCallback(() => {
        setType((prev) => (prev === "raw" ? "formatted" : "raw"));
    }, []);
    return (jsxs("span", { style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: open ? "8px" : "0",
        }, className: `flex flex-col w-inherit font-inherit border border-solid border-d1d9e0 rounded-sm`, children: [jsx(Header, { open: open, type: type, handleOpen: handleOpen, handleType: handleType }), open && (jsx("span", { children: jsx(Display, { type: type, ...props.data }) }))] }));
};

export { Log };
//# sourceMappingURL=index.js.map
