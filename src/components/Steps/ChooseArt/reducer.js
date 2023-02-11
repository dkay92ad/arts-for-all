import { FETCH_OPTIONS, CHANGE_SELECTION, SET_HAS_ERROR } from "./constants";
import { set, get, isEmpty } from "lodash-es";
import { produce } from "immer";
import {
  artClasses,
  artLevel,
  artClassLocation,
  artClassDays,
} from "../config";
const initialState = {
  filterOptions: {
    artClasses,
    artLevel,
    artClassLocation,
    artClassDays,
  },
  filterData: {
    artClasses: [],
    artLevel: artLevel[0],
    artClassLocation: [],
    artClassDays: [],
    artClassTime: "14:00",
  },
  hasError: true,
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_OPTIONS:
      return state;
    case CHANGE_SELECTION:
      const { name, value } = action.payload;
      set(state, name, value);
      break;
    case SET_HAS_ERROR:
      const { hasError } = action.payload;
      state.hasError = hasError;
      break;
  }
}

export default produce(reducer, initialState);
