import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Categories from "../Components/Categories/Categories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Shop from "../Components/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/categories',
        element: <PrivateRoute><Categories/></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>
      },
      {
        path: '/shop',
        element: <Shop/>
      }
    ]
  },
]);
