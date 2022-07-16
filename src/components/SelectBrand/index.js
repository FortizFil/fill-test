import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { axiosConfig } from "utils/axiosConfig";
import { GET_BRANDS } from "constans/API";

import SelectComponent from "components/SelectComponent";

const SelectBrand = ({ brand, setBrand }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    axiosConfig({
      method: "get",
      url: GET_BRANDS,
    })
      .then((resp) => {
        setOptions(resp.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      {options && (
        <SelectComponent
          value={brand}
          setValue={setBrand}
          options={options}
          name={"Brand"}
        />
      )}
    </Box>
  );
};

export default SelectBrand;
