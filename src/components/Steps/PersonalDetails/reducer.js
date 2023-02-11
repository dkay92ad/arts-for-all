import { CHANGE_SELECTION, SET_HAS_ERROR } from "./constants";
import { set } from "lodash-es";
import { produce } from "immer";

const initialState = {
  data: {
    firstName: "",
    lastName: "",
    dob: "",
    emailId: "",
    mailingAddress: {
      houseNumber: "",
      street: "",
      city: "",
      country: "",
      postalCode: "",
    },
  },
  hasError: true,
};

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_SELECTION:
      const { name, value } = action.payload;
      set(state, `data.${name}`, value);
      break;
    case SET_HAS_ERROR:
      const { hasError } = action.payload;
      state.hasError = hasError;
      break;
  }
}

export default produce(reducer, initialState);
