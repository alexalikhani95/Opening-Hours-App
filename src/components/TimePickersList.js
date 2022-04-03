import React, {useState} from "react";
import TimePickers from "./TimePickers";
import { Button, Box } from "@mui/material";
import { SaveButtonContainer, TimePickersListContainer } from "../styles/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimePickersList = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [saveChanges, setSaveChanges] = useState(false);

  const saveMessage = () => toast("Opening and Closing hours saved!");

  const handleSave = (event) => {
    setSaveChanges(true);
    saveMessage();
  };

  const handleEdit = (event) => {
    setSaveChanges(false);
  };

  return (
    <TimePickersListContainer sx={{ boxShadow: 3 }}>
      <h3 style={{ display: !saveChanges ? "none" : "" }}>
        Click the VIEW / EDIT hours button to revisit viewing or editing opening and closing hours
      </h3>
      <Box style={{ display: saveChanges ? "none" : "" }}>
      {weekDays.map((weekday) => (
        <TimePickers weekDay={weekday} key={weekday} />
      ))}
      </Box>
      <SaveButtonContainer>
        <Button
          variant="contained"
          style={{ display: saveChanges ? "none" : "", margin: "20px 0", backgroundColor: "green" }}
          onClick={handleSave}
        >
          SAVE CHANGES
        </Button>
        <Button
          variant="contained"
          style={{
            display: !saveChanges ? "none" : "",
            margin: "20px 0",
            backgroundColor: "green",
          }}
          onClick={handleEdit}
        >
          VIEW / EDIT HOURS
        </Button>
        <ToastContainer />
      </SaveButtonContainer>
    </TimePickersListContainer>
  );
};

export default TimePickersList;
