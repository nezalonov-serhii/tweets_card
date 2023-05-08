import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TweetsList from "components/TweetsList/TweetsList";

import { selectCurrentPage, selectFilter } from "redux/selector/selectors";
import {
   getAllPageTweetsThunk,
   getPageUsersTwitsThunk,
} from "redux/thunk/contactsThunk";

const TweetsPage = () => {
   const dispatch = useDispatch();
   const filter = useSelector(selectFilter);
   const currentPage = useSelector(selectCurrentPage);

   useEffect(() => {
      dispatch(getAllPageTweetsThunk(filter));
      dispatch(getPageUsersTwitsThunk({ currentPage, filter }));
   }, [dispatch, filter, currentPage]);

   return <TweetsList />;
};

export default TweetsPage;
