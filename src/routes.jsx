import React from "react";
import Calculator from "./pages/Calculator";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
