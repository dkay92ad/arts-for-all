import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "common/components/Dropdown";
import { ChooseArtContainer, DayTimeContainer } from "./styled";
import { FETCH_OPTIONS, CHANGE_SELECTION } from "./constants";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ChooseArt = (props) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const chooseArt = useSelector((state) => state.chooseArt.toJS());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_OPTIONS });
  }, []);

  function onChange(name, value) {
    dispatch({ type: CHANGE_SELECTION, payload: { name, value } });
  }

  return (
    <ChooseArtContainer>
      <Dropdown
        list={chooseArt.filterOptions.artClasses || []}
        selectedItems={chooseArt.filterData.artClasses || []}
        listName="artClasses"
        listLabel="Art *"
        helperText="Select one or more art you're interested to learn."
        onChange={onChange}
      />
      <Dropdown
        list={chooseArt.filterOptions.artLevel || []}
        selectedItems={chooseArt.filterData.artLevel || []}
        listName="artLevel"
        listLabel="Art Level"
        helperText="Select the skill level you think you're at currently."
        onChange={onChange}
      />
      <Dropdown
        list={chooseArt.filterOptions.artClassLocation || []}
        selectedItems={chooseArt.filterData.artClassLocation || []}
        listName="artClassLocation"
        listLabel="Class Location"
        helperText="Select the location you would like to learn at."
        onChange={onChange}
      />
      <DayTimeContainer>
        <Dropdown
          list={chooseArt.filterOptions.artClassDays || []}
          selectedItems={chooseArt.filterData.artClassDays || []}
          listName="artClassDays"
          listLabel="Select Days"
          // helperText="Select your preferred days of the week."
          onChange={onChange}
        />
        <TextField
          value={chooseArt.filterData.artClassTime || ""}
          type="time"
          name="artClassTime"
          onChange={(event) => onChange(event.target.name, event.target.value)}
          id="time"
        />
        {isDesktop && (
          <Typography
            variant="subtitle2"
            gutterBottom
            display="block"
            style={{ alignSelf: "center", marginLeft: "1rem" }}
          >
            Select your preferred days & times of the week for class
          </Typography>
        )}
      </DayTimeContainer>
    </ChooseArtContainer>
  );
};

export default ChooseArt;
