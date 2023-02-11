import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({
  list,
  listName,
  listLabel,
  selectedItems = [],
  width = 250,
  onChange,
  helperText = "",
  multiple = true,
  hasError = false
}) {
  const [itemName, setItemName] = React.useState(selectedItems);
  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    onChange(event);
  };

  return (
    <div style={{ display: "flex" }}>
      <FormControl sx={{ m: 1, width, display: "flex" }} error={hasError}>
        <InputLabel id="demo-multiple-checkbox-label">{listLabel}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multiple}
          name={listName}
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput label={listLabel} />}
          renderValue={(selected) =>
            multiple ? selected.join(", ") : selected
          }
          MenuProps={MenuProps}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={itemName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isDesktop && (
        <Typography
          variant="subtitle2"
          gutterBottom
          display="block"
          style={{ alignSelf: "center", marginLeft: "0.5rem" }}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
