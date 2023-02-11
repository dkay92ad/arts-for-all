import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash-es";
import Dropdown from "common/components/Dropdown";
import { ChooseArtContainer, DayTimeContainer } from "./styled";
import { CHANGE_SELECTION, SET_HAS_ERROR } from "./constants";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import uiText from "common/config/uiText";

const ChooseArt = (props) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const filterOptions = useSelector((state) => state.chooseArt.filterOptions);
  const filterData = useSelector((state) => state.chooseArt.filterData);
  const hasErrorState = useSelector((state) => state.chooseArt.hasError);
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      artClasses,
      artLevel,
      artClassLocation,
      artClassDays,
      artClassTime,
    } = filterData;
    const hasError =
      isEmpty(artClasses) ||
      isEmpty(artLevel) ||
      isEmpty(artClassLocation) ||
      isEmpty(artClassDays) ||
      isEmpty(artClassTime);
    if (hasError !== hasErrorState) {
      dispatch({ type: SET_HAS_ERROR, payload: {hasError} });
    }
  }, [filterData]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: CHANGE_SELECTION, payload: { name, value } });

    // dispatch({ type: SET_HAS_ERROR });
  };

  return (
    <ChooseArtContainer>
      <Dropdown
        list={filterOptions.artClasses}
        selectedItems={filterData.artClasses}
        onChange={(event) => onChangeHandler(event)}
        listName="filterData.artClasses"
        listLabel={uiText.ART_CLASSES}
        variant="standard"
        helperText="Select one or more art classes you're interested in."
        hasError={isEmpty(filterData.artClasses)}
      />
      <Dropdown
        list={filterOptions.artLevel}
        selectedItems={filterData.artLevel}
        onChange={onChangeHandler}
        listName="filterData.artLevel"
        listLabel={uiText.ART_LEVEL}
        helperText="Select a skill level you're at currently."
        multiple={false}
        hasError={isEmpty(filterData.artLevel)}
      />
      <Dropdown
        list={filterOptions.artClassLocation}
        selectedItems={filterData.artClassLocation}
        onChange={onChangeHandler}
        listName="filterData.artClassLocation"
        listLabel={uiText.ART_CLASS_LOCATION}
        helperText="Select your preferred class locations."
        hasError={isEmpty(filterData.artClassLocation)}
      />
      <DayTimeContainer>
        <Dropdown
          list={filterOptions.artClassDays}
          selectedItems={filterData.artClassDays}
          onChange={onChangeHandler}
          listName="filterData.artClassDays"
          listLabel={uiText.ART_CLASS_DAYS}
          hasError={isEmpty(filterData.artClassDays)}
        />
        <TextField
          value={filterData.artClassTime}
          onChange={onChangeHandler}
          type="time"
          name="filterData.artClassTime"
          id="time"
          placeholder={uiText.ART_CLASS_TIME}
          inputProps={{
            min: "08:00",
            max: "20:00",
          }}
          error={isEmpty(filterData.artClassTime)}
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

export default React.memo(ChooseArt);
