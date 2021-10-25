import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  // CSS reset by Andy Bell https://piccalil.li/blog/a-modern-css-reset/
  /* Box sizing rules */
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  /* Remove default margin */
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  "ul, ol": {
    listStyle: "none",
    /* Mhm, removing padding might be a good idea */
    padding: 0,
  },

  /* Set core root defaults */
  "html:focus-within": {
    scrollBehavior: "smooth",
  },

  /* Set core body defaults */
  body: {
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: "1.5",
  },

  /* A elements that don't have a class get default styles */
  "a:not([class])": {
    textDecorationSkipInk: "auto",
  },

  /* Make images easier to work with */
  "img, picture": {
    maxWidth: "100%",
    display: "block",
  },

  /* Inherit fonts for inputs and buttons */
  "input, button, textarea, select": {
    font: "inherit",
  },

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": {
      scrollBehavior: "auto",
    },

    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01 !important",
      scrollBehavior: "auto !important",
    },
  },

  /* custom global css */
  "*, *::before, *::after": {
    lineHeight: 1.45,
    fontSmooth: "auto",
  },

  html: {
    height: "100%",
    fontSize: "1.125rem",
  },

  body: {
    height: "100%",
    fontFamily: "$system",
    backgroundColor: "$gray100",
    color: "$loContrast",
  },

  "#__next": {
    height: "100%",
    isolation: "isolate",
  },
});
