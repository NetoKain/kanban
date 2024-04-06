import React from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
import KanbanPage from "../pages/kaban_page";
import HomePage from "../pages/home_page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kanban/*" element={<KanbanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
