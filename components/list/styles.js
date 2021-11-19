import { styled } from "../../stitches.config";

const Wrapper = styled("div", {
  paddingX: "$1",
  paddingY: "$5",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

const DateHeading = styled("h2", {
  fontSize: "$6",
  fontWeight: 600,
});

export { Wrapper, DateHeading };
