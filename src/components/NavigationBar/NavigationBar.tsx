import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

interface INavigationBarProps {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationBar: React.FC<INavigationBarProps> = ({ setOpenDrawer }) => {
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
      <Box
        sx={{
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "typography.fontFamily",
        }}
      >
        Vide y Sora
      </Box>
      <Box>
        <IconButton
          onClick={() => setOpenDrawer((prev: boolean): boolean => !prev)}
          sx={{ color: "white" }}
        >
          <MenuRoundedIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default NavigationBar;
