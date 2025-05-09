import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import "./../style.css";
const Header = (props) => {
    return (_jsxs("span", { className: "flex justify-between", children: [_jsx("small", { children: props.title }), _jsx("span", { children: props.open ? (_jsx("span", { className: "font-medium cursor-pointer", onClick: props.handleOpen, children: "-" })) : (_jsx("span", { className: "font-medium cursor-pointer", onClick: props.handleOpen, children: "+" })) })] }));
};
export const Log = (props) => {
    var _a;
    const [open, setOpen] = useState((_a = props.open) !== null && _a !== void 0 ? _a : true);
    const handleOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    return (_jsxs("span", { className: "w-inherit font-inherit", children: [_jsx(Header, { open: open, handleOpen: handleOpen }), open ? (_jsx("pre", { className: "m-0 whitespace-pre-wrap break-words", children: _jsx("code", { children: JSON.stringify(props, undefined, 4) }) })) : null] }));
};
