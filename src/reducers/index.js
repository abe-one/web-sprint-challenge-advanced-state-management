import { act } from "react-dom/test-utils";
import {
  FETCH_SMURF_COMPLETE,
  FETCH_SMURF_FAILURE,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
} from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        smurfs: action.payload,
      };

    case FETCH_SMURF_COMPLETE:
      return {
        ...state,
        isLoading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default reducer;

//Task List:

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
