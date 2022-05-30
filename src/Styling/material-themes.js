import { createTheme } from "@mui/material/styles";

const h1 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  fontSize: "60px",
  lineHeight: "70.02px",
  letterSpacing: "-0.9372px",
};
const h2 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  fontSize: "60px",
  letterSpacing: "-0.5px",
  lineHeight: "50px",
};
const h3 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "56.016px",
};
const h4 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "34px",
  lineHeight: "41.99px",
  letterSpacing: "0.2499px",
};

const h5 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "32.016px",
};

const h6 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "32px",
  letterSpacing: "0.15px",
};

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3E4756",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#A2ACBD",
      secondary: "#1b1b1b",
    },
    background: {
      default: "#0A1929",
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&$selected": { color: "red" },
        },
        selected: {},
      },
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
    h5,
    h6,
  },
});
