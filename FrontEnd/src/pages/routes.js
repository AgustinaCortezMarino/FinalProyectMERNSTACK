import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./layouts/NotFound";
import New from "./New/New";
import Home from "./Home/Home";
import Details from "./Details/Details";
import EditForm from "../components/EditForm";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },

        { path: "/:id", element: <Details /> },
        { path: "/new", element: <New /> },
        // { path: "/delete/:id", element: <Delete /> },
        { path: "/edit/:id", element: <EditForm /> },
        ,
        ,
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Routes;
