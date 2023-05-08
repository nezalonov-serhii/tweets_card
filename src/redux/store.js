import { configureStore } from "@reduxjs/toolkit";

import { tweetsReducer } from "./Slice/TweetsSlice";

export const store = configureStore({
   reducer: {
      tweets: tweetsReducer,
   },
});
