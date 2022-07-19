import * as React from "react";
// import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MaterialUIPickers({
  label,
  helperText = "",
  ...props
}) {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <Stack spacing={3}> */}
      {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      {/* <MobileDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      <div style={{ display: "flex", gap: "0.5em" }}>
        <TextField
          label={label}
          type="date"
          // defaultValue="2017-05-24"
          sx={{ width: isDesktop ? "250px" : "92%", margin: "0 0.5em" }}
          InputLabelProps={{
            shrink: true,
          }}
          {...props}
        />
        {helperText && isDesktop && (
          <Typography
            variant="subtitle2"
            gutterBottom
            display="block"
            style={{ alignSelf: "center" }}
          >
            {helperText}
          </Typography>
        )}
      </div>
      {/* <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      {/* </Stack> */}
    </LocalizationProvider>
  );
}
