import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Dropdown from "common/components/Dropdown";
import TextField from "common/components/TextField";
import DatePicker from "common/components/DatePicker";
import { PersonalDetailsContainer, NameContainer } from "./styled.js";
import { CHANGE_SELECTION } from "./constants";

const PersonalDetails = () => {
  const personalDetails = useSelector((state) => state.personalDetails.toJS());
  const dispatch = useDispatch();

  function onChange(name, value) {
    if(value){
      dispatch({ type: CHANGE_SELECTION, payload: { name, value } });
    }
  }

  return (
    <PersonalDetailsContainer>
      <NameContainer>
        <TextField
          onChange={(event) => onChange(event.target.name, event.target.value)}
          value={personalDetails.data.firstName || ""}
          name="firstName"
          id="firstName"
          label="First Name"
          variant="outlined"
        />
        <TextField
          onChange={(event) => onChange(event.target.name, event.target.value)}
          value={personalDetails.data.lastName || ""}
          name="lastName"
          id="lastName"
          label="Last Name"
          variant="outlined"
          helperText="Enter First and Last name"
        />
      </NameContainer>
      <DatePicker
        onChange={(event) => onChange(event.target.name, event.target.value)}
        value={personalDetails.data.dob || new Date()}
        name="dob"
        id="dob"
        label="Date of birth"
        helperText="Enter your date of birth. Ex: 03/22/2001"
      />
      <TextField
        onChange={(event) => onChange(event.target.name, event.target.value)}
        value={personalDetails.data.emailId || ""}
        name="emailId"
        id="emailId"
        label="Email-ID"
        variant="outlined"
        helperText="Enter your Email Id. Ex: johndoe@example.com"
      />
      <TextField
        onChange={(event) => onChange(event.target.name, event.target.value)}
        value={personalDetails.data.mailingAddress || ""}
        name="mailingAddress"
        id="mailingAddress"
        label="Mailing Address"
        multiline
        rows={4}
        size="small"
        // defaultValue="Default Value"
        width="60%"
        helperText="Enter your address with zipcode."
      />
    </PersonalDetailsContainer>
  );
};

export default PersonalDetails;
