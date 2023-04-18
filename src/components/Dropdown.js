import React, { useState } from "react";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

function Dropdown() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMenuItemClick = (event) => {
    window.location.hash = event.target.value;
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
      <InputLabel htmlFor="dropdown-select">Select Hook</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label="Select Hook"
        inputProps={{
          name: "hook",
          id: "dropdown-select",
        }}
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <MenuItem value="useState">
          <Link width="100%" href="#useState">
            useState
          </Link>
        </MenuItem>
        <MenuItem value="useEffect">
          <Link width="100%" href="#useEffect">useEffect</Link>
        </MenuItem>
        <MenuItem value="useRef">
          <Link width="100%" href="#useRef">useRef</Link>
        </MenuItem>
        <MenuItem value="useContext">
          <Link width="100%" href="#useContext">useContext</Link>
        </MenuItem>
        <MenuItem value="useReducer">
          <Link width="100%" href="#useReducer">useReducer</Link>
        </MenuItem>
        <MenuItem value="useCallback">
          <Link width="100%" href="#useCallback">useCallback</Link>
        </MenuItem>
        <MenuItem value="useMemo">
          <Link width="100%" href="#useMemo">useMemo</Link>
        </MenuItem>
        <MenuItem value="useLayoutEffect">
          <Link width="100%" href="#useLayoutEffect">useLayoutEffect</Link>
        </MenuItem>
        <MenuItem value="useDebugValue">
          <Link width="100%" href="#useDebugValue">useDebugValue</Link>
        </MenuItem>
        <MenuItem value="useTransition">
          <Link width="100%" href="#useTransition">useTransition</Link>
        </MenuItem>
        <MenuItem value="useDeferredValue">
          <Link width="100%" href="#useDeferredValue">useDeferredValue</Link>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
