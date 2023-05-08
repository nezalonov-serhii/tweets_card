import styled from "styled-components";

export const TweetCard = styled.article`
   box-sizing: border-box;
   position: relative;
   top: 0;
   left: 0;

   display: flex;
   flex-direction: column;
   justify-content: end;
   align-items: center;

   padding-bottom: 36px;

   width: 380px;
   min-height: 460px;

   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
   border-radius: 20px;
   background-image: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
   );

   &::before {
      content: "";
      position: absolute;
      top: 28px;
      left: 36px;

      width: 308px;
      height: 168px;

      background-image: url(${({ backgroundCard }) => backgroundCard});
   }
`;

export const TweetIcon = styled.svg`
   position: absolute;
   top: 20px;
   left: 20px;

   width: 76px;
   height: 22px;
`;

export const TweetLine = styled.div`
   position: absolute;
   top: 214px;
   left: 0;

   transform: translateY(-50%);

   width: 100%;
   height: 8px;

   background: #ebd8ff;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrap = styled.div`
   position: absolute;
   top: 214px;
   left: 50%;

   display: flex;
   align-items: center;
   justify-content: center;

   transform: translate(-50%, -50%);

   width: 80px;
   height: 80px;

   background: #ebd8ff;
   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
   border-radius: 50%;
`;

export const Avatar = styled.img`
   border-radius: 50%;
   width: calc(100% - 16px);
`;

export const TweetText = styled.p`
   margin-bottom: 16px;

   font-weight: 500;
   font-size: 20px;
   line-height: 1.2;
   text-transform: uppercase;
   color: #ebd8ff;
`;

export const FollowersText = styled.p`
   margin-bottom: 26px;

   font-weight: 500;
   font-size: 20px;
   line-height: 1.2;
   text-transform: uppercase;
   color: #ebd8ff;
`;

export const FollowButton = styled.button`
   width: 196px;
   min-height: 50px;
   padding: 14px 0;

   background-color: ${({ isFollow }) => (isFollow ? "#5CD3A8" : "#ebd8ff")};

   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   border: none;
   border-radius: 10.3108px;

   font-weight: 600;
   font-size: 18px;
   line-height: 1.2;
   color: #373737;
   text-transform: uppercase;

   transition: background-color 200ms linear;

   &:hover {
      background-color: ${({ isFollow }) => (isFollow ? "#f39595" : "#33ffb5")};
   }

   &:disabled {
      opacity: 60%;
   }
`;

// #ebd8ff
