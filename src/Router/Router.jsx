import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Categories from "../Components/Categories/Categories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      }
    ]
  },
]);
