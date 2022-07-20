import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "common/components/Dropdown";
import { ChooseArtContainer, DayTimeContainer } from "./styled";
import { FETCH_OPTIONS, CHANGE_SELECTION } from "./constants";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import uiText from 'common/config/uiText';

const ChooseArt = (props) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const chooseArt = useSelector((state) => state.chooseArt.toJS());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_OPTIONS });
  }, []);

  function onChange(name, value) {
    if (value) {
      dispatch({ type: CHANGE_SELECTION, payload: { name, value } });
    }
  }

  return (
    <ChooseArtContainer>
      <Dropdown
        list={chooseArt.filterOptions.artClasses || []}
        selectedItems={chooseArt.filterData.artClasses || []}
        onChange={onChange}
        listName="artClasses"
        listLabel={uiText.ART_CLASSES}
        helperText="Select one or more art classes you're interested in."
      />
      <Dropdown
        list={chooseArt.filterOptions.artLevel || []}
        selectedItems={chooseArt.filterData.artLevel || ""}
        onChange={onChange}
        listName="artLevel"
        listLabel={uiText.ART_LEVEL}
        helperText="Select a skill level you're at currently."
        multiple={false}
      />
      <Dropdown
        list={chooseArt.filterOptions.artClassLocation || []}
        selectedItems={chooseArt.filterData.artClassLocation || []}
        onChange={onChange}
        listName="artClassLocation"
        listLabel={uiText.ART_CLASS_LOCATION}
        helperText="Select your preferred class locations."
      />
      <DayTimeContainer>
        <Dropdown
          list={chooseArt.filterOptions.artClassDays || []}
          selectedItems={chooseArt.filterData.artClassDays || []}
          onChange={onChange}
          listName="artClassDays"
          listLabel={uiText.ART_CLASS_DAYS}
        />
        <TextField
          value={chooseArt.filterData.artClassTime || ""}
          onChange={(event) => onChange(event.target.name, event.target.value)}
          type="time"
          name="artClassTime"
          id="time"
          placeholder={uiText.ART_CLASS_TIME}
          inputProps={{
            min: "08:00",
            max: "20:00",
          }}
        />
        {isDesktop && (
          <Typography
            variant="subtitle2"
            gutterBottom
            display="block"
            style={{ alignSelf: "center", marginLeft: "1rem" }}
          >
            Select your preferred day(s) & time of the week for the classes.
          </Typography>
        )}
      </DayTimeContainer>
    </ChooseArtContainer>
  );
};

export default ChooseArt;
