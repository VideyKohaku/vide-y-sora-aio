import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "../components/Navigation";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="meo">Meo meo</div>
    </BrowserRouter>
  );
};
