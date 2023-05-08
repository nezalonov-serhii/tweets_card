import Welcome from "components/Welcome/Welcome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCurrentPage, resetUsersTweets } from "redux/Slice/TweetsSlice";

const HomePage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(resetCurrentPage());
      dispatch(resetUsersTweets());
   }, [dispatch]);

   return <Welcome />;
};

export default HomePage;
