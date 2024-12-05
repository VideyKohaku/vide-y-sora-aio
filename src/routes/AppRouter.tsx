import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "../components/Navigation";
import RandomizerPage from "../pages/RandomizerPage/RandomizerPage";
import { Drawer } from "@mui/material";

export const AppRouter: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  console.log("openDrawer", openDrawer);

  return (
    <BrowserRouter>
      <NavigationBar setOpenDrawer={setOpenDrawer} />
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div>Drawer</div>
      </Drawer>
      <Routes>
        <Route path="/" element={<RandomizerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
