import React, { useState } from "react";

import Box from "@mui/material/Box";

import SelectTerm from "components/SelectTerm";
import SelectBrand from "components/SelectBrand";
import SelectStyle from "components/SelectStyle";

const Dashboard = () => {
  const [term, setTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  return (
    <Box sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}>
      <SelectTerm term={term} setTerm={setTerm} />
      <SelectBrand brand={brand} setBrand={setBrand} />
      <SelectStyle style={style} setStyle={setStyle} />
    </Box>
  );
};

export default Dashboard;
