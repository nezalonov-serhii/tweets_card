import {
   changeFilter,
   filterTweets,
   resetPage,
} from "redux/Slice/contactsSlice";
import { Filter, Header, HeaderContainer, HeaderNav } from "./AppBar.styled";
import { useDispatch } from "react-redux";

const AppBar = () => {
   const dispatch = useDispatch();
   const options = ["All", "Follow", "Following"];

   const handlerFilter = (e) => {
      dispatch(resetPage());
      dispatch(changeFilter());
      dispatch(filterTweets(e.target.value));
   };

   return (
      <Header>
         <HeaderContainer>
            <HeaderNav>
               <a href="./">Home</a>
               <a href="./">Tweets</a>
            </HeaderNav>
            <p>Filter</p>
            <Filter onChange={handlerFilter} name="filter">
               {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
               })}
            </Filter>
         </HeaderContainer>
      </Header>
   );
};

export default AppBar;
