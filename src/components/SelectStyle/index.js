import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { axiosConfig } from "utils/axiosConfig";
import { GET_STYLES } from "constans/API";

import SelectComponent from "components/SelectComponent";

const SelectStyle = ({ style, setStyle }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    axiosConfig({
      method: "get",
      url: GET_STYLES,
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
          value={style}
          setValue={setStyle}
          options={options}
          name={"Style"}
        />
      )}
    </Box>
  );
};

export default SelectStyle;
