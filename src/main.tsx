import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import soraTheme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={soraTheme}>
    <App />
  </ThemeProvider>
);
