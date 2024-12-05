import { Box } from "@mui/material";
import React from "react";

const SearchBox: React.FC = () => {
  return (
    <Box
      sx={{
        width: "80%",
        minWidth: "16rem",
        height: "6rem",
        backgroundColor: "white",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "0.5rem",
        textAlign: "center",
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.3)",
      }}
    >
      Search
    </Box>
  );
};

export default SearchBox;
