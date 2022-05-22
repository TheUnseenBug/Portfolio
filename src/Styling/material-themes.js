import { createTheme } from "@mui/material/styles";
const white = "#ffffff";
const neonDark = "#00c896";
const primary = {
  light: neonDark,
  main: neonDark,
  dark: neonDark,
  contrastText: white,
};

const h1 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "30px",
};
const h2 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
};
const h3 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "17px",
  lineHeight: "20px",
};
const h4 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
};

const h5 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
};

const h6 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "1.25rem",
  lineHeight: "1.6",
  letterSpacing: "0.0075em",
};

export const theme = createTheme({
  palette: {
    primary,
    background: {
      paper: "#f8fafd",
      default: "#ffffff",
    },

    text: {
      primary: "#1b1b1b",
      secondary: "#40495f",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "sans-serif",
      "Caveat",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1,
    h2,
    h3,
    h4,
  },
});
