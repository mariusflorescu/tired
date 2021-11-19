import { styled, keyframes } from "../../stitches.config";

const animationBlur = keyframes({
  "0%": {
    filter: "blur(0) opacity(1)",
  },
  "100%": {
    filter: "blur(4px) opacity(0.6)",
  },
});

const StyledItem = styled("textarea", {
  all: "unset",
  padding: "$2",
  borderRadius: "$1",
  filter: "blur(4px) opacity(0.6)",
  whiteSpace: "pre-line",

  "@motionSafe": {
    transition: "250ms ease",
    transitionProperty: "background-color, filter",
  },

  "&:hover, &:focus": {
    backgroundColor: "$gray200",
    filter: "blur(0) opacity(1)",
    animation: "none",
  },
});

const StyledDateWrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

const StyledDate = styled("small", {
  fontSize: "$2",
  color: "$gray500",

  "@motionSafe": {
    transition: "opacity 150ms ease",
  },
});

export { StyledItem, animationBlur, StyledDateWrapper, StyledDate };
