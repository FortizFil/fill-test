import React, { useState, useEffect } from "react";

import { Box } from "@mui/material/Box";

import { axiosConfig } from "utils/axiosConfig";
import { GET_TERMS } from "constans/API";

import SelectComponent from "components/SelectComponent";

const SelectTerm = ({ term, setTerm }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    axiosConfig({
      method: "get",
      url: GET_TERMS,
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
          value={term}
          setValue={setTerm}
          options={options}
          name={"Term"}
        />
      )}
    </Box>
  );
};

export default SelectTerm;
