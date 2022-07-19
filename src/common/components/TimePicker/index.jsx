import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// background-color: #dee7ff;
const theme = createTheme({
  components: {
    MuiMobileTimePicker: {
      styleOverrides: {
        root: {
          margin: "0.5em 1em",
        },
      },
    },
  },
});

const MuiMobileTimePicker = styled(MobileTimePicker, {
  name: "MuiMobileTimePicker",
  overridesResolver: (props, styles) => [styles.root],
})(({ theme }) => ({
  "&.MuiFormControl-root": {
    background: "red",
  },
}));

export default function StaticTimePickerLandscape() {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <MuiMobileTimePicker
          ampm
          openTo="minutes"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
