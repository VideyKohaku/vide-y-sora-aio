import React from "react";
import { AppRouter } from "./routes/AppRouter";
// import "./App.css";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container
      sx={{
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        justifyContent: "start",
        alignItems: "center",
        border: "1px solid red",
      }}
      disableGutters={true}
    >
      <AppRouter />
    </Container>
  );
};

export default App;
