import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

// import {reduxLogger} fom 'reduxLogger'
// const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
// const cakeReducer = require("../features/cake/cakeSlice");
// const iceCreamReducer = require("../features/icecream/iceCreamSlice");
// const userReducer = require("../features/user/userSlice");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(),
});
export default store;
// module.export = store;
