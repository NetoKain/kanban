import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import KanbanPage from "../pages/kaban_page";
import HomePage from "../pages/home_page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KanbanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
