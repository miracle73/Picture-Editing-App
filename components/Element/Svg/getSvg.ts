const getSvg = (name: string) => {
  switch (name) {
    case "google":
      return require("../../../assets/svg/google.svg").default;
    case "apple":
      return require("../../../assets/svg/apple.svg").default;
    case "eye-slash":
      return require("../../../assets/svg/eye-slash.svg").default;
    case "key":
      return require("../../../assets/svg/key.svg").default;
    case "person":
      return require("../../../assets/svg/person.svg").default;
    case "mail":
      return require("../../../assets/svg/mail.svg").default;
    case "logo":
      return require("../../../assets/svg/logo.svg").default;
    case "notification":
      return require("../../../assets/svg/notification.svg").default;
    case "search":
      return require("../../../assets/svg/search.svg").default;
    case "delete":
      return require("../../../assets/svg/delete.svg").default;
    case "share":
      return require("../../../assets/svg/share.svg").default;
    case "pencil":
      return require("../../../assets/svg/pencil.svg").default;
    case "ellipsis":
      return require("../../../assets/svg/ellipsis.svg").default;
    case "horizontal-ellipsis":
      return require("../../../assets/svg/horizontal-ellipsis.svg").default;
    case "user":
      return require("../../../assets/svg/user.svg").default;
    case "add-square":
      return require("../../../assets/svg/add-square.svg").default;
  }
};

export default getSvg;
