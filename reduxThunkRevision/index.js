const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action Types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTORED = "ICE_CREAM_RESTORED";

// Action Creators
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restoCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICE_CREAM_ORDERED,
    payload: qty,
  };
}

function restoIceCream(qty = 1) {
  return {
    type: ICE_CREAM_RESTORED,
    payload: qty,
  };
}

// Initial States
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTORED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICE_CREAM_RESTORED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(
  () => {}
  //   console.log("Updated state:", store.getState())
);

// Dispatching actions using bindActionCreators
const actions = bindActionCreators(
  { orderCake, restoCake, orderIceCream, restoIceCream },
  store.dispatch
);
actions.orderCake(1); // Order 1 cake
actions.restoCake(3); // Restore 3 cakes
actions.orderIceCream(2); // Order 2 ice creams
actions.restoIceCream(5); // Restore 5 ice creams

// Unsubscribe after actions
unsubscribe();
