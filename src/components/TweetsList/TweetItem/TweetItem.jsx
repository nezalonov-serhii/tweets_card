import {
   Avatar,
   AvatarWrap,
   FollowButton,
   FollowersText,
   TweetCard,
   TweetIcon,
   TweetLine,
   TweetText,
} from "./TweetItem.styled";

import Sprite from "assets/img/sprite.svg";
import backgroundCard from "assets/img/background-card.png";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersTweetsThunk } from "redux/thunk/contactsThunk";
import { selectIsLoading, selectUsersTweets } from "redux/selector/selectors";
import Loader from "components/Loader/Loader";

const TweetItem = () => {
   const dispatch = useDispatch();

   const IsLoading = useSelector(selectIsLoading);
   const usersTweets = useSelector(selectUsersTweets);

   const handelFollow = async (user) => {
      if (!user.follow) {
         const editedUser = {
            ...user,
            ...{ follow: !user.follow, followers: user.followers + 1 },
         };
         dispatch(updateUsersTweetsThunk({ id: user.id, editedUser }));
      } else {
         const editedUser = {
            ...user,
            ...{ follow: !user.follow, followers: user.followers - 1 },
         };
         dispatch(updateUsersTweetsThunk({ id: user.id, editedUser }));
      }
   };

   const addDots = (followers) => {
      return followers.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1.");
   };

   return usersTweets.map((user) => {
      return (
         <TweetCard backgroundCard={backgroundCard} key={user.id}>
            <TweetIcon>
               <use href={Sprite + "#icon-logo"}> </use>
            </TweetIcon>
            <TweetLine />
            <AvatarWrap>
               <Avatar src={user.avatar} alt="avatar" />
            </AvatarWrap>

            <TweetText>{user.tweets} tweets</TweetText>
            <FollowersText>{addDots(user.followers)} followers </FollowersText>
            <FollowButton
               follow={user.follow}
               onClick={() => handelFollow(user)}
               disabled={IsLoading}
            >
               {!IsLoading && user.follow && <>following</>}
               {!IsLoading && !user.follow && <>follow</>}
               {IsLoading && <Loader />}
            </FollowButton>
         </TweetCard>
      );
   });
};

export default TweetItem;
