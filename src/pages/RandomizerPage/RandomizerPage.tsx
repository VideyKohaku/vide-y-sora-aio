import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import PlacesList from "../../components/Places/PlacesList";
import { Stack } from "@mui/material";

const RandomizerPage: React.FC = () => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100%",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "0.5rem",
        boxSizing: "border-box",
        alignItems: "center",
        marginTop: "1rem",
      }}
      spacing={2}
    >
      <SearchBox />
      <PlacesList />
    </Stack>
  );
};

export default RandomizerPage;
