import { useCallback, useState } from "react";
import "./../style.css";

interface LogProps {
  [key: string]: any;
  open?: boolean;
}

interface HeaderProps {
  title?: string;
  open?: boolean;
  handleOpen: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <span className="flex justify-between">
      <small>{props.title}</small>
      <span>
        {props.open ? (
          <span
            className="font-medium cursor-pointer"
            onClick={props.handleOpen}
          >
            -
          </span>
        ) : (
          <span
            className="font-medium cursor-pointer"
            onClick={props.handleOpen}
          >
            +
          </span>
        )}
      </span>
    </span>
  );
};

export const Log = (props: LogProps) => {
  const [open, setOpen] = useState(props.open ?? true);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <span className="w-inherit font-inherit">
      {/* `title` props idealy be immediate parent component! */}
      <Header open={open} handleOpen={handleOpen} />
      {open ? (
        <pre className="m-0 whitespace-pre-wrap break-words">
          <code>{JSON.stringify(props, undefined, 4)}</code>
        </pre>
      ) : null}
    </span>
  );
};
