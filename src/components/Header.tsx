interface HeaderProps {
  title?: string;
  open?: boolean;
  type: "raw" | "formatted";
  handleOpen: () => void;
  handleType: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <span
      style={{ paddingTop: "8px", paddingBottom: "8px" }}
      className="flex justify-between"
    >
      <small>{props.title}</small>
      <span className="flex items-center gap-1">
        {props.open && (
          <button
            type="button"
            onClick={props.handleType}
            style={{
              fontFamily: "inherit",
              fontSize: "12px",
              border: "1px solid #d1d9e0",
              borderRadius: "4px",
              outline: "none",
              backgroundColor: "#fff",
              color: "#4a5565",
            }}
          >
            {props.type}
          </button>
        )}
        {props.open ? (
          <span
            className="flex font-bold text-xs cursor-pointer"
            onClick={props.handleOpen}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: "1px solid #d1d9e0",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
              color: "#4a5565",
            }}
          >
            &#9866;
          </span>
        ) : (
          <span
            className="font-bold text-xxs cursor-pointer"
            onClick={props.handleOpen}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: "1px solid #d1d9e0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
              color: "#4a5565",
            }}
          >
            &#10010;
          </span>
        )}
      </span>
    </span>
  );
};

export default Header;
