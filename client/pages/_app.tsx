import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,

    h1: { fontSize: 60, fontWeight: "bold" },
    h2: { fontSize: 48, fontWeight: "bold" },
    h3: { fontSize: 42, fontWeight: "bold" },
    h4: { fontSize: 36, fontWeight: "bold" },
    h5: { fontSize: 20, fontWeight: "bold" },
    h6: { fontSize: 18, fontWeight: "bold" },
    subtitle1: { fontSize: 18 },
    body1: { fontSize: 16 },
    button: { textTransform: "none" },
    caption: { fontSize: 14 },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {},
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
      // contrastText: "#000"
      //
      //
      // ,
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
