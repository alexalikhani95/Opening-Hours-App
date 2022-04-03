import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const TimePickers = ({ weekDay }) => {
  const [open, setOpen] = React.useState(null);
  const [close, setClose] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          border: "1px solid grey",
          padding: 3,
          borderRadius: 1,
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheck} />}
            label={weekDay}
          />
        </FormGroup>
        {checked && (
          <Box>
            <TimePicker
              label="Open"
              value={open}
              onChange={(newValue) => {
                setOpen(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        )}

        {checked && (
          <Box>
            <TimePicker
              label="Close"
              value={close}
              onChange={(newValue) => {
                setClose(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default TimePickers;
