import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import { axiosConfig } from "utils/axiosConfig";
import { PARSE_LINK } from "constans/API";

import SelectTerm from "components/SelectTerm";
import SelectBrand from "components/SelectBrand";
import SelectStyle from "components/SelectStyle";

const Dashboard = () => {
  const [term, setTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const a = location.pathname.split("/");

  let url = `${term.length > 0 ? "/s-" + term : term}${
    brand.length > 0 ? "/b-" + brand : brand
  }${style.length > 0 ? "/st-" + style : style}`;

  const getParam = (arr, param) => {
    if (param === "term") {
      const currentParam = arr
        .filter((el) => el[0] === "s" && el[1] === "-")[0]
        ?.split("");
      currentParam?.splice(0, 2);
      return currentParam ? currentParam.join("") : "";
    } else if (param === "brand") {
      const currentParam = arr
        .filter((el) => el[0] === "b" && el[1] === "-")[0]
        ?.split("");
      currentParam?.splice(0, 2);
      return currentParam ? currentParam.join("") : "";
    } else {
      const currentParam = arr
        .filter((el) => el[0] === "s" && el[1] === "t")[0]
        ?.split("");
      currentParam?.splice(0, 3);
      return currentParam ? currentParam.join("") : "";
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      let link = location.pathname.split("/");
      link.shift();
      axiosConfig({
        method: "get",
        url: `${PARSE_LINK}?brand_slug=${getParam(
          a,
          "brand"
        )}&service_slug=${getParam(a, "term")}&style_slug=${getParam(
          a,
          "style"
        )}`,
      })
        .then((resp) => {
          setTerm(resp.data.service?.slug || "");
          setBrand(resp.data.brand?.slug || "");
          setStyle(resp.data.style?.slug || "");
        })
        .catch((error) => console.log(error));
    }
  }, []);

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
