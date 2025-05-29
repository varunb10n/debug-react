export interface HeaderProps {
    title?: string;
    open?: boolean;
    type: "raw" | "formatted";
    handleOpen: () => void;
    handleType: () => void;
}
declare const Header: (props: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
