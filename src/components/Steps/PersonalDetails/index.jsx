import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash-es";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "common/components/TextField";
import DatePicker from "common/components/DatePicker";
import { PersonalDetailsContainer } from "./styled.js";
import { CHANGE_SELECTION, SET_HAS_ERROR } from "./constants";

const PersonalDetails = () => {
  const data = useSelector((state) => state.personalDetails.data);
  const hasErrorState = useSelector((state) => state.personalDetails.hasError);
  const { firstName, lastName, dob, emailId, mailingAddress } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      firstName,
      lastName,
      dob,
      emailId,
      mailingAddress: { postalCode, country },
    } = data;
    const hasError =
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(dob) ||
      isEmpty(emailId) ||
      isEmpty(country) ||
      isEmpty(postalCode);
    if (hasError !== hasErrorState) {
      dispatch({ type: SET_HAS_ERROR, payload: { hasError } });
    }
  }, [data]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: CHANGE_SELECTION, payload: { name, value } });
  };

  return (
    <PersonalDetailsContainer>
      <Box sx={{ m: 1 }}>
        <Stack direction="column">
          <Stack direction="row" spacing={2}>
            <TextField
              onChange={onChangeHandler}
              value={firstName}
              name="firstName"
              label="First Name*"
              variant="standard"
              helperText="Ex: John"
              error={isEmpty(firstName)}
            />
            <TextField
              onChange={onChangeHandler}
              value={lastName}
              name="lastName"
              label="Last Name*"
              variant="standard"
              helperText="Ex: Doe"
              error={isEmpty(lastName)}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <DatePicker
              onChange={onChangeHandler}
              value={dob}
              name="dob"
              label="Date of birth*"
              helperText="Ex: 01/17/1994"
              variant="standard"
              error={isEmpty(dob)}
            />
            <TextField
              onChange={onChangeHandler}
              value={emailId}
              name="emailId"
              label="Email-ID*"
              variant="standard"
              helperText="Ex: johndoe@example.com"
              error={isEmpty(emailId) || !emailId.includes("@")}
            />
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ ml: 1 }}>
        <Divider>
          <Typography
            sx={{ mt: 0.5, mb: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Mailing Address
          </Typography>
        </Divider>
        <Stack direction="column">
          <Stack direction="row" spacing={2}>
            <TextField
              onChange={onChangeHandler}
              value={mailingAddress.houseNumber}
              name="mailingAddress.houseNumber"
              label="House Number"
              variant="standard"
              helperText="Ex: 2315"
              // error={isEmpty(mailingAddress.houseNumber)}
            />
            <TextField
              onChange={onChangeHandler}
              value={mailingAddress.street}
              name="mailingAddress.street"
              label="Street"
              variant="standard"
              helperText="Ex: 1st Street"
              // error={isEmpty(mailingAddress.street)}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              onChange={onChangeHandler}
              value={mailingAddress.city}
              name="mailingAddress.city"
              label="City"
              variant="standard"
              helperText="Ex: Omaha"
              // error={isEmpty(mailingAddress.city)}
            />
            <TextField
              onChange={onChangeHandler}
              value={mailingAddress.country}
              name="mailingAddress.country"
              label="Country*"
              variant="standard"
              helperText="Ex: USA"
              error={isEmpty(mailingAddress.country)}
            />
          </Stack>
          <TextField
            onChange={onChangeHandler}
            value={mailingAddress.postalCode}
            name="mailingAddress.postalCode"
            label="Postal Code*"
            variant="standard"
            helperText="Ex: 68107"
            error={isEmpty(mailingAddress.postalCode)}
          />
        </Stack>
      </Box>
    </PersonalDetailsContainer>
  );
};

export default React.memo(PersonalDetails);
