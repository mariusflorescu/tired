import { ThemeProvider } from "next-themes";
import { theme, darkTheme } from "../stitches.config";
import { globalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme,
        light: theme,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
