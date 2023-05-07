import styled from "styled-components";

export const Header = styled.header`
   padding: 15px 0;
   background-color: #4b2a99;
   color: #ebd8ff;
`;

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;

   width: 480px;
   padding: 0 15px;
   margin: 0 auto;

   @media screen and (min-width: 780px) {
      width: 780px;
   }

   @media screen and (min-width: 1280px) {
      width: 1280px;
   }
`;

export const HeaderNav = styled.nav`
   display: flex;
   gap: 20px;

   margin-right: 50px;
`;

export const Filter = styled.select`
   margin-left: 15px;
   padding: 3px 5px;

   border-radius: 8px;
`;
