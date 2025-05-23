export interface LogProps {
    [key: string]: any;
    open?: boolean;
    type?: "raw" | "formatted";
}
export interface DisplayProps {
    type: "raw" | "formatted";
    [key: string]: any;
}
export interface FormattedProps {
    [key: string]: any;
}
export interface HeaderProps {
    title?: string;
    open?: boolean;
    type: "raw" | "formatted";
    handleOpen: () => void;
    handleType: () => void;
}
