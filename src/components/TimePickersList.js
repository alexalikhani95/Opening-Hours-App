import React from 'react'
import { Button, Box, Container } from "@mui/material";
import TimePickers from './TimePickers';

const TimePickersList = () => {

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <Container sx={{boxShadow: 3}}>
  {weekDays.map(weekday => (
      <TimePickers weekDay={weekday} key={weekday}/>
  ))}
  <Box style={{display: 'flex', justifyContent: 'flex-end', margin: '40px 0'}}>
  <Button variant="contained" style={{margin: '20px 0', backgroundColor: 'green'}}>SAVE CHANGES</Button>   
  </Box> 
    </Container>
  )
}

export default TimePickersList