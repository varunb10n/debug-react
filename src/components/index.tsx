import { JSX, useCallback, useState } from "react";
import Header from "./Header";
import { isObject } from "../util/shim";
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

interface FormattedProps {
  [key: string]: any;
}

const Formatted = (props: FormattedProps) => {
  const renderFormatted = (
    obj: Record<string, any>,
    depth = 0,
    path = ""
  ): JSX.Element[] => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const marginLeft = depth * 16;
      const currentPath = path ? `${path}.${key}` : key;

      if (isObject(value)) {
        return [
          <pre
            key={currentPath}
            className="m-0 whitespace-pre-wrap break-words rounded-sm p-2"
            style={{ backgroundColor: "#f6f8fa", marginLeft }}
          >
            <code className="text-xs" style={{ color: "#4a5565" }}>
              {key}
            </code>
          </pre>,
          ...renderFormatted(
            value as Record<string, any>,
            depth + 1,
            currentPath
          ),
        ];
      }

      return (
        <pre
          key={currentPath}
          className="m-0 whitespace-pre-wrap break-words bg-f6f8fa rounded-sm"
          style={{ backgroundColor: "#f6f8fa", marginLeft }}
        >
          <code className="text-xs" style={{ color: "#4a5565" }}>
            {key}: {String(value)}
          </code>
        </pre>
      );
    });
  };

  if (!isObject(props)) return null;

  return <>{renderFormatted(props)}</>;
};

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
      return <Formatted {...rest} />;
  }
};

export const Log = (props: LogProps) => {
  const [open, setOpen] = useState(props.open ?? true);

  const [type, setType] = useState<"formatted" | "raw">(props.type ?? "raw");

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
      {open && (
        <span>
          <Display type={type} {...props} />
        </span>
      )}
    </span>
  );
};
