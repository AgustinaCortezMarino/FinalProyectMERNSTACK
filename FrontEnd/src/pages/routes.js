import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./layouts/NotFound";
import New from "./New/New";
import Home from "./Home/Home";
import Details from "./Details/Details";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "", element: <Home /> },

        { path: "details", element: <Details /> },
        { path: "new", element: <New /> },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Routes;
