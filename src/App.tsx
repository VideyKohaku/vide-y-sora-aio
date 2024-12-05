import React from "react";
import { AppRouter } from "./routes/AppRouter";
// import "./App.css";
import { Box, Container } from "@mui/material";

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
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "0.5rem",
          boxSizing: "border-box",
          width: "100%",
          textAlign: "center",
          height: "8rem",

          position: "fixed",
          zIndex: "-100",
        }}
      />
      <AppRouter />
    </Container>
  );
};

export default App;
