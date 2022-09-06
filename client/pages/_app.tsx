import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
    },
    button: {
      fontSize: "2rem",
    },
    subtitle1: {
      fontSize: "1.6rem",
    },
  },
  palette: {
    primary: {
      // light: "#757ce8",
      main: "#7fc8a9",
      // dark: "#002884",
      // contrastText: "#fff",
    },
    secondary: {
      // light: "#ff7961",
      main: "#d5eebb",
      // dark: "#ba000d",
      // contrastText: "#000",
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
