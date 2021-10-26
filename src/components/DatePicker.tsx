import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { theme, useStyles } from "./Styles/styles";
import { ThemeProvider } from "@material-ui/styles";

interface Props {
  changeDate: (newDate: Date | null) => void;
  date: Date | null;
}

const DatePicker: React.FC<Props> = ({ changeDate, date }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={changeDate}
          renderInput={(params) => <TextField {...params} />}
          className={classes.datePicker}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
