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
import BannerImage from "../Dashboard/BannerImage";
import AddProductCategory from "../Dashboard/AddProductCategory";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory";

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
      {
        path: 'payment',
        element: <Payment/>
      }
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
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>
      },
      {
        path: '/dashboard/update_product/:_id',
        loader: ({params}) => fetch(`http://localhost:2100/product/${params._id}`),
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>
      },
      {
        path: '/dashboard/all_user',
        element: <PrivateRoute><AdminRoute><AllUser /></AdminRoute></PrivateRoute>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PrivateRoute><AdminRoute><PaymentHistory /></AdminRoute></PrivateRoute>
      },
      {
        path: '/dashboard/banner_image',
        element: <PrivateRoute><AdminRoute><BannerImage /></AdminRoute></PrivateRoute>
      },
      {
        path: '/dashboard/product_category',
        element: <PrivateRoute><AdminRoute><AddProductCategory /></AdminRoute></PrivateRoute>
      },
    ]
  },
]);
