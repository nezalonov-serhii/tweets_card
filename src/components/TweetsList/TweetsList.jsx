import { useEffect } from "react";
import TweetItem from "./TweetItem/TweetItem";
import { LoadMore, TweetContainer, TweetSection } from "./TweetsList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
   selectIsLoading,
   selectPage,
   selectTotalPage,
   selectUsersTweets,
} from "redux/selector/selectors";
import {
   getAllPageTweetsThunk,
   getPageUsersTwitsThunk,
} from "redux/thunk/contactsThunk";
import { incrementPage } from "redux/Slice/contactsSlice";
import Loader from "components/Loader/Loader";

const TweetsList = () => {
   const usersTweets = useSelector(selectUsersTweets);
   const IsLoading = useSelector(selectIsLoading);
   const totalPage = useSelector(selectTotalPage);
   const page = useSelector(selectPage);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllPageTweetsThunk());
      dispatch(getPageUsersTwitsThunk(page));
   }, [dispatch, page]);

   const handelPage = () => {
      dispatch(incrementPage());
   };

   return (
      <>
         {usersTweets.length !== 0 && (
            <TweetSection>
               <TweetContainer>
                  <TweetItem />
               </TweetContainer>
               {totalPage !== page && (
                  <LoadMore onClick={handelPage} disabled={IsLoading}>
                     {!IsLoading && <>Load More</>}
                     {IsLoading && <Loader />}
                  </LoadMore>
               )}
            </TweetSection>
         )}
      </>
   );
};

export default TweetsList;
