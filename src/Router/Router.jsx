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
import Dashboard from "../Dashboard/Dashboard";
// import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../Dashboard/AddProduct";
import UpdateProduct from "../Dashboard/UpdateProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import Cart from "../Components/Cart/Cart";
import AllUser from "../Dashboard/AllUser";

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
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Shop /></PrivateRoute>
      },
      {
        path: '/dashboard/add_product',
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: '/dashboard/update_product',
        element: <PrivateRoute><AdminRoute><UpdateProduct /></AdminRoute></PrivateRoute>
      },
      {
        path: '/dashboard/all_user',
        element: <PrivateRoute><AdminRoute><AllUser /></AdminRoute></PrivateRoute>
      }
    ]
  },
]);
