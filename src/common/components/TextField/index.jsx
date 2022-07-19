import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.css';

export default function BasicTextFields({
  id,
  label,
  variant,
  helperText = "",
  width = "250px",
  ...props
}) {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: isDesktop ? width : "92%" },
      }}
      noValidate
      autoComplete="off"
      style={{ display: "flex" }}
      id={id}
    >
      <TextField label={label} variant={variant} {...props} />
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
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
