import React from "react";
import TimePickers from "./TimePickers";
import { Button } from "@mui/material";
import { SaveButtonContainer, TimePickersListContainer } from "../styles/styles";

const TimePickersList = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <TimePickersListContainer sx={{ boxShadow: 3 }}>
      {weekDays.map((weekday) => (
        <TimePickers weekDay={weekday} key={weekday} />
      ))}
      <SaveButtonContainer>
        <Button variant="contained" style={{ margin: "20px 0", backgroundColor: "green" }}>
          SAVE CHANGES
        </Button>
      </SaveButtonContainer>
    </TimePickersListContainer>
  );
};

export default TimePickersList;
