export interface LogProps {
    data: {
        [key: string]: any;
    };
    open?: boolean;
    type?: "raw" | "formatted";
}
