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
  paddingY: "$3",
  paddingX: "$2",
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

export { StyledItem, animationBlur };
