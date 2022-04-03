import { styled } from "@material-ui/core/styles";
import { Box, Container } from "@mui/material";

export const AppContainer = styled(Container)(() => ({
  padding: '10px 0'
}));

export const WelcomeTextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const TimePickersContainer = styled(Container)(() => ({
  marginTop: 10,
  flexWrap: "wrap",
  border: "1px solid grey",
  padding: 20,
  borderRadius: 5,
  borderColor: "lightgrey",
  "@media (max-width: 780px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const TimePickersListContainer = styled(Container)(() => ({
  paddingTop: '10px'
}));

export const TimePickerBox = styled(Box)(() => ({
  "@media (max-width: 780px)": {
    marginBottom: 20,
  },
}));

export const SaveButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  margin: "40px 0",
}));