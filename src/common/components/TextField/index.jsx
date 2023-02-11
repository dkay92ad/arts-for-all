import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";

export default function BasicTextFields({
  id,
  label,
  variant,
  width = "250px",
  ...props
}) {
  const isDesktop = useMediaQuery("(min-width:600px)");
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
    </Box>
  );
}
