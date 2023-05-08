import { Link } from "react-router-dom";
import styled from "styled-components";

export const TweetSection = styled.section`
   padding: 20px 0;
`;

export const TweetContainer = styled.div`
   margin: 0 auto;
   width: 480px;

   @media screen and (min-width: 780px) {
      width: 780px;
   }

   @media screen and (min-width: 1280px) {
      width: 1280px;
   }
`;

export const TweetWrap = styled.div`
   display: flex;
   flex-wrap: wrap;

   gap: calc((780px - 380px * 2) / 0.5);

   @media screen and (max-width: 779px) {
      justify-content: center;
   }

   @media screen and (min-width: 780px) {
      gap: calc((780px - (380px * 2)));
   }

   @media screen and (min-width: 1280px) {
      gap: calc((1280px - (380px * 3)) / 2);
   }
`;

export const ToHome = styled(Link)`
   display: inline-block;
   padding: 8px 20px;
   margin-bottom: 20px;

   border-radius: 10px;

   color: #ebd8ff;
   background-color: #4b2a99;

   transition: color 250ms linear, background-color 250ms linear;

   &:hover {
      background-color: rgb(92, 211, 168);
      color: #373737;
   }
`;

export const LoadMore = styled.button`
   display: block;
   min-width: 140px;
   padding: 15px 20px;
   margin: 0 auto;

   margin-top: 40px;

   background-color: #ebd8ff;

   border: none;
   border-radius: 10px;

   font-weight: 600;
   font-size: 16px;
   line-height: 1.2;
   color: #373737;
   text-transform: uppercase;

   transition: background-color 200ms linear;

   &:hover {
      background-color: #33ffb5;
      box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   }

   &:disabled {
      opacity: 60%;
   }
`;
