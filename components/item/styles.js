import { styled, keyframes } from "../../stitches.config";
import Textarea from "../textarea";

const animationBlur = keyframes({
  "0%": {
    filter: "blur(0) opacity(1)",
  },
  "100%": {
    filter: "blur(4px) opacity(0.6)",
  },
});

const BlurryTextarea = styled(Textarea, {
  margin: 0,
  filter: "blur(4px) opacity(0.6)",

  "&:hover, &:focus": {
    filter: "blur(0) opacity(1)",
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

export { BlurryTextarea, animationBlur, StyledDateWrapper, StyledDate };
