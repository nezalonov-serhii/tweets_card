import { useDispatch } from "react-redux";

import {
   changeFilter,
   filterTweets,
   resetCurrentPage,
} from "redux/Slice/TweetsSlice";

import {
   Filter,
   Header,
   HeaderContainer,
   HeaderNav,
   HeaderNavLink,
} from "./AppBar.styled";
import { useLocation } from "react-router-dom";

const AppBar = () => {
   const dispatch = useDispatch();
   const optionsFilter = ["All", "Follow", "Following"];
   const location = useLocation();

   const handlerFilter = (e) => {
      dispatch(resetCurrentPage());
      dispatch(changeFilter());
      dispatch(filterTweets(e.target.value));
   };

   return (
      <Header>
         <HeaderContainer>
            <HeaderNav>
               <HeaderNavLink to="/">Home</HeaderNavLink>
               <HeaderNavLink to="tweets">Tweets</HeaderNavLink>
            </HeaderNav>
            {location.pathname === "/tweets" && (
               <>
                  <p>Filter</p>
                  <Filter onChange={handlerFilter} name="filter">
                     {optionsFilter.map((option, index) => {
                        return <option key={index}>{option}</option>;
                     })}
                  </Filter>
               </>
            )}
         </HeaderContainer>
      </Header>
   );
};

export default AppBar;
