import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const FETCH_SMURF_COMPLETE = "FETCH_SMURF_COMPLETE";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

const actionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(actionCreator(FETCH_SMURF_START));

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch(actionCreator(FETCH_SMURF_SUCCESS, res.data)))
      .catch((err) =>
        console.log("seems get errors are impossible, how 'bout that?")
      )
      .finally(() => dispatch(actionCreator(FETCH_SMURF_COMPLETE)));
  };
};
