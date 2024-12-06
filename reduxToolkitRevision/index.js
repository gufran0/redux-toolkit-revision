const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("initial state", store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

// Dispatch actions for cake
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

// Dispatch actions for ice cream
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(5));

// Unsubscribe to stop logging state updates
unsubscribe();
