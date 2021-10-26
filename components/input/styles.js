import { styled } from "../../stitches.config";

const StyledInput = styled("textarea", {
  all: "unset",
  width: "100%",
  marginX: "$1",
  paddingY: "$3",
  paddingX: "$2",
  borderRadius: "$1",

  "@motionSafe": {
    transition: "250ms ease",
    transitionProperty: "background-color",
  },

  "&:hover, &focus": {
    backgroundColor: "$gray200",
  },
});

const Small = styled("small", {
  width: "100%",
  color: "$gray600",
  display: "flex",
  justifyContent: "flex-end",
});

export { StyledInput, Small };
