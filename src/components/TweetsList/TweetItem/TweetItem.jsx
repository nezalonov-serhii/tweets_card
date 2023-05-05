import {
   Avatar,
   AvatarWrap,
   FollowButton,
   FollowersText,
   TweetCard,
   TweetIcon,
   TweetLine,
   TweetText,
} from "../TweetItem.styled";

import Sprite from "img/sprite.svg";
import backgroundCard from "img/background-card.png";
import avatar from "img/1009.jpg";

const TweetItem = () => {
   return (
      <TweetCard backgroundCard={backgroundCard}>
         <TweetIcon>
            <use href={Sprite + "#icon-logo"}> </use>
         </TweetIcon>
         <TweetLine />
         <AvatarWrap>
            <Avatar src={avatar} alt="avatar" />
         </AvatarWrap>

         <TweetText>777 tweets</TweetText>
         <FollowersText>100.500 Followers </FollowersText>
         <FollowButton>FOLLOW</FollowButton>
      </TweetCard>
   );
};

export default TweetItem;
