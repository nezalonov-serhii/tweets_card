import {
   WelcomeContainer,
   WelcomeSection,
   WelcomeText,
   WelcomeTextLink,
} from "./Welcome.styled";

const Welcome = () => {
   return (
      <WelcomeSection>
         <WelcomeContainer>
            <WelcomeText>
               Welcome to our application, in which we have collected popular
               people and conducted analytics on their{" "}
               <WelcomeTextLink to="tweets">Tweets</WelcomeTextLink>, you can
               also following to them.
            </WelcomeText>
         </WelcomeContainer>
      </WelcomeSection>
   );
};

export default Welcome;
