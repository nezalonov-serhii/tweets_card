import { useDispatch, useSelector } from "react-redux";

import { SkeletonTweets } from "components/Skeleton/SkeletonTweets";
import Loader from "components/Loader/Loader";
import TweetItem from "./TweetItem/TweetItem";

import { incrementPage } from "redux/Slice/TweetsSlice";
import {
   selectCurrentPage,
   selectIsLoading,
   selectTotalPage,
   selectUsersTweets,
} from "redux/selector/selectors";

import {
   LoadMore,
   ToHome,
   TweetContainer,
   TweetSection,
   TweetWrap,
} from "./TweetsList.styled";

const TweetsList = () => {
   const dispatch = useDispatch();
   const usersTweets = useSelector(selectUsersTweets);
   const IsLoading = useSelector(selectIsLoading);
   const totalPage = useSelector(selectTotalPage);
   const currentPage = useSelector(selectCurrentPage);

   const handelPage = () => {
      dispatch(incrementPage());
   };

   return (
      <TweetSection>
         <TweetContainer>
            <ToHome to="/">Back</ToHome>
            <TweetWrap>
               {usersTweets.length !== 0 && <TweetItem />}
               {IsLoading && usersTweets.length === 0 && (
                  <SkeletonTweets quantity={3} />
               )}
            </TweetWrap>
            {totalPage !== currentPage && usersTweets.length !== 0 && (
               <LoadMore onClick={handelPage} disabled={IsLoading}>
                  {!IsLoading && <>Load More</>}
                  {IsLoading && <Loader />}
               </LoadMore>
            )}
         </TweetContainer>
      </TweetSection>
   );
};

export default TweetsList;
