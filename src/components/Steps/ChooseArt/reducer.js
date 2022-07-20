import { FETCH_OPTIONS, CHANGE_SELECTION } from "./constants";
import { fromJS } from "immutable";
import {
  artClasses,
  artLevel,
  artClassLocation,
  artClassDays,
} from "../config";
const initialState = fromJS({
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
    artClassTime: "14:00"
  },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_OPTIONS:
      return state.merge(initialState);
    case CHANGE_SELECTION:
      const {name, value} = action.payload;
      return state.mergeIn(['filterData'], {
        ...state.filterData,
        [name]: value
      });
    default:
      return state;
  }
}

export default reducer;
