import { configureStore } from "@reduxjs/toolkit";
import allMailsReducer from "../features/allMailsSlice";
import mailReducer from "../features/mailSlice";

const store = configureStore({
  reducer: {
    mail: mailReducer,
    allMails: allMailsReducer
  },
});

export default store;
