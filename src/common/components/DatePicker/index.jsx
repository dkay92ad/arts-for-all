import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DatePicker({ label, ...props }) {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TextField
        label={label}
        type="date"
        // defaultValue="2017-05-24"
        format={"DD/MM/YYYY"}
        sx={{ width: isDesktop ? "250px" : "92%", margin: "0.5em" }}
        InputLabelProps={{
          shrink: true,
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}
