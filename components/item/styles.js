import { styled, keyframes } from "../../stitches.config";

const animationBlur = keyframes({
  "0%": {
    filter: "blur(0) opacity(1)",
  },
  "100%": {
    filter: "blur(4px) opacity(0.6)",
  },
});

const StyledItem = styled("span", {
  paddingY: "$3",
  filter: "blur(4px) opacity(0.6)",

  "@motionSafe": {
    transition: "filter 250ms ease",
  },

  "&:hover": {
    filter: "blur(0) opacity(1)",
    animation: "none",
  },
});

export { StyledItem, animationBlur };
