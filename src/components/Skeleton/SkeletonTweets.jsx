import "react-loading-skeleton/dist/skeleton.css";
import {
   SkeletonBody,
   SkeletonItems,
   SkeletonLists,
} from "./SkeletonTweets.styled";

export const SkeletonTweets = ({ quantity }) => {
   const skeletons = [];

   for (let i = 0; i < quantity; i++) {
      skeletons.push(<SkeletonBody />);
   }

   return (
      <SkeletonLists>
         {skeletons.map((skeleton, i) => (
            <SkeletonItems key={i}>{skeleton}</SkeletonItems>
         ))}
      </SkeletonLists>
   );
};
