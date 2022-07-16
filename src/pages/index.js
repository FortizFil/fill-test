import React from "react";
import { Routes, Route } from "react-router-dom";

import DasboardPage from "./DasboardPage";

const Pages = () => {
  return (
    <Routes>
      <Route path='*' element={<DasboardPage />} />
    </Routes>
  );
};

export default Pages;
