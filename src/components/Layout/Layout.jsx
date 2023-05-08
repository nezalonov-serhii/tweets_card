import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Loader from "components/Loader/Loader";
import AppBar from "components/AppBar/AppBar";

import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
   return (
      <>
         <AppBar />
         <main>
            <Suspense fallback={<Loader />}>
               <Outlet />
            </Suspense>
         </main>
         <ToastContainer />
      </>
   );
};

export default Layout;
