import { JSX } from "react";
import { isObject } from "../util/shim";
import { FormattedProps } from "../types";
import { Code, DisplayWrapper, Pre } from "../styles";

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
          <Pre key={currentPath} marginLeft={marginLeft}>
            <Code>{key}</Code>
          </Pre>,
          ...renderFormatted(
            value as Record<string, any>,
            depth + 1,
            currentPath
          ),
        ];
      }

      return (
        <Pre key={currentPath} marginLeft={marginLeft}>
          <Code>
            {key}: {String(value)}
          </Code>
        </Pre>
      );
    });
  };

  if (!isObject(props)) return null;

  return <DisplayWrapper>{renderFormatted(props)}</DisplayWrapper>;
};

export default Formatted;
