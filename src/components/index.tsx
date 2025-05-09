import { useCallback, useState } from "react";
import Header from "./Header";
import "./../style.css";
interface LogProps {
  [key: string]: any;
  open?: boolean;
  type?: "raw" | "formatted";
}
interface DisplayProps {
  type: "raw" | "formatted";
  [key: string]: any;
}

const Display = ({ type, ...rest }: DisplayProps) => {
  switch (type) {
    case "raw":
      return (
        <pre className="m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm">
          <code className="text-xs" style={{ color: "#4a5565" }}>
            {JSON.stringify(rest, undefined, 4)}
          </code>
        </pre>
      );
    case "formatted":
      return (
        <pre className="m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm">
          <code className="text-xs" style={{ color: "#4a5565" }}>
            ...
          </code>
        </pre>
      );
  }
};

export const Log = (props: LogProps) => {
  const [open, setOpen] = useState(props.open ?? true);

  const [type, setType] = useState<"raw" | "formatted">(props.type ?? "raw");

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleType = useCallback(() => {
    setType((prev) => (prev === "raw" ? "formatted" : "raw"));
  }, []);

  return (
    <span
      style={{
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingBottom: open ? "8px" : "0",
      }}
      className={`flex flex-col w-inherit font-inherit border border-solid border-d1d9e0 rounded-sm`}
    >
      <Header
        open={open}
        type={type}
        handleOpen={handleOpen}
        handleType={handleType}
      />
      {open && <Display type={type} {...props} />}
    </span>
  );
};
