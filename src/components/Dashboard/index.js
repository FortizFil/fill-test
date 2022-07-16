import React, { useState } from "react";

import Box from "@mui/material/Box";

import SelectTerm from "components/SelectTerm";
import SelectBrand from "components/SelectBrand";

const Dashboard = () => {
  const [term, setTerm] = useState("");
  const [brand, setBrand] = useState("");
  return (
    <Box>
      <SelectTerm term={term} setTerm={setTerm} />
      <SelectBrand brand={brand} setBrand={setBrand} />
    </Box>
  );
};

export default Dashboard;
