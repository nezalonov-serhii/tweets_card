import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomeSection = styled.section`
   padding: 30px 0;
`;

export const WelcomeContainer = styled.div`
   max-width: 380px;

   margin: 0 auto;
   padding: 10px 25px;

   border: none;
   border-radius: 20px;

   width: 380px;
   box-shadow: rgba(0, 0, 0, 0.23) -2.5777px 6.87386px 20.6216px;

   color: rgb(235, 216, 255);

   background-image: linear-gradient(
      114.99deg,
      rgb(71, 28, 169) -0.99%,
      rgb(87, 54, 163) 54.28%,
      rgb(75, 42, 153) 78.99%
   );
`;

export const WelcomeText = styled.p`
   font-size: 18px;
`;

export const WelcomeTextLink = styled(Link)`
   color: #33ffb5;
`;
