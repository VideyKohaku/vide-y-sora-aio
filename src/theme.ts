import { createTheme } from "@mui/material/styles";

const soraTheme = createTheme({
  palette: {
    primary: {
      main: "#8ecae6",
      light: "#81d3f5",
      dark: "#379ad5",
    },
    secondary: {
      main: "#ffa1fe",
      light: "#fec8fe",
      dark: "#d933e4",
    },
    background: {
      default: "#FAFAFA",
    },
  },
  typography: {
    fontFamily: "poppins  ",
  },
});

export default soraTheme;
