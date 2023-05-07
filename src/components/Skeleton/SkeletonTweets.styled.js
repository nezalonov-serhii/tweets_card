import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLists = styled.ul`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

   width: 100%;

   list-style: none;
`;

export const SkeletonItems = styled.li`
   flex-basis: 380px;
   height: 460px;
`;

export const SkeletonBody = styled(Skeleton)`
   width: 380px;
   height: 100%;
   border-radius: 20px;
`;
