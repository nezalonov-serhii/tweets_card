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
import { SkeletonTweets } from "components/Skeleton/SkeletonTweets";

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
         <TweetSection>
            <TweetContainer>
               {usersTweets.length !== 0 && <TweetItem />}
               {IsLoading && usersTweets.length === 0 && (
                  <SkeletonTweets quantity={3} />
               )}
            </TweetContainer>
            {totalPage !== page && usersTweets.length !== 0 && (
               <LoadMore onClick={handelPage} disabled={IsLoading}>
                  {!IsLoading && <>Load More</>}
                  {IsLoading && <Loader />}
               </LoadMore>
            )}
         </TweetSection>
      </>
   );
};

export default TweetsList;
