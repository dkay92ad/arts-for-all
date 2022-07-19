import { CHANGE_SELECTION } from "./constants";
import { fromJS } from "immutable";
// import {
//   artClasses,
//   artLevel,
//   artClassLocation,
//   artClassDays,
// } from "../config";
const initialState = fromJS({
  data: {
    firstName: "",
    lastName: "",
    dob: "",
    emailId: "",
    mailingAddress: "",
  },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTION:
      const { name, value } = action.payload;
      if(!value) return state;
      return state.mergeIn(["data"], {
        ...state.data,
        [name]: value,
      });
    default:
      return state;
  }
}

export default reducer;
