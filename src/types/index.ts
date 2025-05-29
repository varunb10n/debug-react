export interface LogProps {
  data: {
    [key: string]: any;
  };
  open?: boolean;
  type?: "raw" | "formatted";
}

export interface HeaderProps {
  title?: string;
  open?: boolean;
  type: "raw" | "formatted";
  handleOpen: () => void;
  handleType: () => void;
}

export interface FormattedProps {
  [key: string]: any;
}

export interface DisplayProps {
  type: "raw" | "formatted";
  [key: string]: any;
}
