import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export const NavigationBar: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        width: "100%",
        padding: "0.5rem",
        boxSizing: "border-box",
        height: "3rem",
      }}
    >
      <Box>Logo</Box>
      <Box>
        <IconButton>
          <MenuRoundedIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};
