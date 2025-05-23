import "./../style.css";
export interface LogProps {
    data: {
        [key: string]: any;
    };
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
declare const Log: (props: LogProps) => import("react/jsx-runtime").JSX.Element;
export default Log;
