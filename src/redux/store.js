import { configureStore } from "@reduxjs/toolkit";

import { tweetsReducer } from "./Slice/contactsSlice";

export const store = configureStore({
   reducer: {
      tweets: tweetsReducer,
   },
});
