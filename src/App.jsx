import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import HomePage from "Page/HomePage";

const TweetsPage = lazy(() => import("Page/TweetsPage"));

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tweets" element={<TweetsPage />} />
         </Route>
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}

export default App;
