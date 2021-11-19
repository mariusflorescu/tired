import { styled } from "../../stitches.config";

const Textarea = styled("textarea", {
  all: "unset",
  width: "100%",
  marginX: "$1",
  padding: "$2",
  borderRadius: "$1",

  "@motionSafe": {
    transition: "250ms ease",
    transitionProperty: "background-color, filter",
  },

  "&:hover, &focus": {
    backgroundColor: "$gray200",
    animation: "none",
  },
});

export default Textarea;
