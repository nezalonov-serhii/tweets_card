import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { twitsInitialState } from "redux/initialState/initialState";
import {
   getAllPageTweetsThunk,
   getPageUsersTwitsThunk,
   updateUsersTweetsThunk,
} from "redux/thunk/contactsThunk";

const handlePending = (state) => {
   state.isLoading = true;
};

const handleFulfilled = (state) => {
   state.isLoading = false;
   state.error = "";
};

const handleRejected = (state, { error }) => {
   state.error = error;
   state.isLoading = false;
   state.changeFilter = false;
};

const tweetsSlice = createSlice({
   name: "tweets",
   initialState: twitsInitialState,

   reducers: {
      incrementPage(state) {
         state.currentPage += 1;
      },
      resetCurrentPage(state) {
         state.currentPage = 1;
      },
      resetUsersTweets(state) {
         state.usersTweets = [];
      },

      filterTweets(state, actions) {
         state.filter = actions.payload;
      },
      changeFilter(state) {
         state.changeFilter = true;
      },
   },

   extraReducers: (builder) => {
      builder

         .addCase(getAllPageTweetsThunk.fulfilled, (state, { payload }) => {
            state.totalPage = Math.ceil(payload.length / 3);
         })
         .addCase(getPageUsersTwitsThunk.fulfilled, (state, { payload }) => {
            if (state.changeFilter) {
               state.usersTweets = [...payload];
            } else {
               state.usersTweets = [...state.usersTweets, ...payload];
            }
            state.changeFilter = false;
         })
         .addCase(updateUsersTweetsThunk.fulfilled, (state, { payload }) => {
            const index = state.usersTweets.findIndex((tweet) => {
               return tweet.id === payload.id;
            });
            state.usersTweets[index] = payload;
         })

         .addMatcher(
            isAnyOf(
               getAllPageTweetsThunk.pending,
               getPageUsersTwitsThunk.pending,
               updateUsersTweetsThunk.pending
            ),
            handlePending
         )
         .addMatcher(
            isAnyOf(
               getAllPageTweetsThunk.fulfilled,
               getPageUsersTwitsThunk.fulfilled,
               updateUsersTweetsThunk.fulfilled
            ),
            handleFulfilled
         )
         .addMatcher(
            isAnyOf(
               getAllPageTweetsThunk.rejected,
               getPageUsersTwitsThunk.rejected,
               updateUsersTweetsThunk.rejected
            ),
            handleRejected
         );
   },
});

export const {
   incrementPage,
   filterTweets,
   changeFilter,
   resetUsersTweets,
   resetCurrentPage,
} = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
