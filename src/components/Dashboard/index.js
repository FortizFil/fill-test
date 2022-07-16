import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import SelectTerm from "components/SelectTerm";
import SelectBrand from "components/SelectBrand";
import SelectStyle from "components/SelectStyle";

const Dashboard = () => {
  const [term, setTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  const navigate = useNavigate();

  let url = `${term.length > 0 ? "/s-" + term : term}${
    brand.length > 0 ? "/b-" + brand : brand
  }${style.length > 0 ? "/st-" + style : style}`;

  useEffect(() => {
    navigate(url);
  }, [url]);

  return (
    <Box
      sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}
    >
      <SelectTerm term={term} setTerm={setTerm} />
      <SelectBrand brand={brand} setBrand={setBrand} />
      <SelectStyle style={style} setStyle={setStyle} />
    </Box>
  );
};

export default Dashboard;
