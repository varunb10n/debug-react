import * as react_jsx_runtime from 'react/jsx-runtime';

interface LogProps {
    [key: string]: any;
    open?: boolean;
    type?: "raw" | "formatted";
}

declare const Log: (props: LogProps) => react_jsx_runtime.JSX.Element;

export { Log };
