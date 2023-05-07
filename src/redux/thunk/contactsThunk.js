import { createAsyncThunk } from "@reduxjs/toolkit";
import {
   getAllPageTweets,
   getPageUsersTwits,
   updateUsersTweets,
} from "service/apiUsers";

export const getAllPageTweetsThunk = createAsyncThunk(
   "tweets/allUsersTweets",
   async () => getAllPageTweets()
);

export const getPageUsersTwitsThunk = createAsyncThunk(
   "tweets/pageUsersTwits",
   async (page) => getPageUsersTwits(page)
);

export const updateUsersTweetsThunk = createAsyncThunk(
   "tweets/updateUsersTweets",
   async ({ id, editedUser }, thunkAPI) => {
      console.log(thunkAPI);
      return updateUsersTweets(id, editedUser);
   }
);
