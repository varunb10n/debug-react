import Log from ".";

export default {
  title: "react-log",
  component: Log,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Empty = {
  args: {
    data: {},
  },
};

export const Data = {
  args: {
    data: {
      package: "@domlog/react-log",
      version: "0.0.10",
      info: {
        homepage: "https://",
      },
      versions: ["0.0.8", "0.0.9"],
    },
  },
};

export const Formatted = {
  args: {
    data: {
      package: "@domlog/react-log",
      version: "0.0.10",
      info: {
        homepage: "https://",
        additionalInfo: {
          status: "development",
          stable: false,
        },
      },
      versions: ["0.0.8", "0.0.9"],
    },
    type: "formatted",
    open: true,
  },
};

export const Close = {
  args: {
    data: {
      package: "@domlog/react-log",
      version: "0.0.10",
      info: {
        homepage: "https://",
      },
      versions: ["0.0.8", "0.0.9"],
    },
    open: false,
  },
};
