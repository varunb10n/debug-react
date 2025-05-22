import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Header = (props) => {
    return (_jsxs("span", { style: { paddingTop: "8px", paddingBottom: "8px" }, className: "flex justify-between", children: [_jsx("small", { children: props.title }), _jsxs("span", { className: "flex items-center gap-1", children: [props.open && (_jsx("button", { type: "button", onClick: props.handleType, style: {
                            fontFamily: "inherit",
                            fontSize: "12px",
                            border: "1px solid #d1d9e0",
                            borderRadius: "4px",
                            outline: "none",
                            backgroundColor: "#fff",
                            color: "#4a5565",
                        }, children: props.type })), props.open ? (_jsx("span", { className: "font-bold text-xs cursor-pointer", onClick: props.handleOpen, style: {
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "1px solid #d1d9e0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            userSelect: "none",
                            color: "#4a5565",
                        }, children: "\u268A" })) : (_jsx("span", { className: "font-bold text-xxs cursor-pointer", onClick: props.handleOpen, style: {
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
export default Header;
