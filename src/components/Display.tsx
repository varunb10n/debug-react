import { Code, DisplayWrapper, Pre } from "../styles";
import { DisplayProps } from "../types";
import Formatted from "./Formatted";

const Display = ({ type, ...rest }: DisplayProps) => {
  switch (type) {
    case "raw":
      return (
        <DisplayWrapper>
          <Pre>
            <Code>{JSON.stringify(rest, undefined, 4)}</Code>
          </Pre>
        </DisplayWrapper>
      );
    case "formatted":
      return <Formatted {...rest} />;
  }
};

export default Display;
