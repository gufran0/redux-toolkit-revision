const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default; // Correct default import for thunk
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

const InitialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED, // Correct type
    payload: users, // Correct property name
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED, // Correct type
    payload: error, // Correct property name
  };
};

// Reducer function
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload, // Corrected property name
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false, // Corrected to false since the request failed
        users: [],
        error: action.payload, // Corrected property name
      };
    default:
      return state;
  }
};

// Thunk action to fetch users
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()); // This should match the action creator's name exactly
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSucceeded(response.data)); // Dispatch the users
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message)); // Dispatch the error message
      });
  };
};

// Store creation
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware) // Using thunk middleware to handle async actions
);

// Subscribe to the store to log the state
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch the fetchUsers action to trigger the entire flow
store.dispatch(fetchUsers());
