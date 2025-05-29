import { useCallback, useState } from "react";
import Display from "./Display";
import Header from "./Header";
import { LogProps } from "../types";
import { Wrapper } from "../styles";

const Log = (props: LogProps) => {
  const [open, setOpen] = useState(props.open ?? true);

  const [type, setType] = useState<"formatted" | "raw">(props.type ?? "raw");

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleType = useCallback(() => {
    setType((prev) => (prev === "raw" ? "formatted" : "raw"));
  }, []);

  return (
    <Wrapper open={open}>
      <Header
        title="@domlog/react-log"
        open={open}
        type={type}
        handleOpen={handleOpen}
        handleType={handleType}
      />
      {open && <Display type={type} {...props.data} />}
    </Wrapper>
  );
};

export default Log;
