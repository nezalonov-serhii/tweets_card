import { createAsyncThunk } from "@reduxjs/toolkit";
import {
   getAllPageTweets,
   getPageUsersTwits,
   updateUsersTweets,
} from "service/apiUsers";

export const getAllPageTweetsThunk = createAsyncThunk(
   "tweets/allUsersTweets",
   async (filter) => getAllPageTweets(filter)
);

export const getPageUsersTwitsThunk = createAsyncThunk(
   "tweets/pageUsersTwits",
   async ({ currentPage, filter }) => getPageUsersTwits(currentPage, filter)
);

export const updateUsersTweetsThunk = createAsyncThunk(
   "tweets/updateUsersTweets",
   async ({ id, editedUser }, thunkAPI) => updateUsersTweets(id, editedUser)
);
