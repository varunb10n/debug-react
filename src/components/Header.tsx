import { Button, HeaderLeft, HeaderTitle, HeaderWrapper } from "../styles";
import { HeaderProps } from "../types";

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{props.title}</HeaderTitle>
      <HeaderLeft>
        {props.open && (
          <Button type="button" onClick={props.handleType}>
            {props.type}
          </Button>
        )}

        <Button type="button" onClick={props.handleOpen}>
          {props.open ? `close` : `open`}
        </Button>
      </HeaderLeft>
    </HeaderWrapper>
  );
};

export default Header;
