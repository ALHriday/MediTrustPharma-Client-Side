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
import AddProduct from "../Dashboard/AddProduct";
import UpdateProduct from "../Dashboard/UpdateProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import Cart from "../Components/Cart/Cart";
import AllUser from "../Dashboard/AllUser";
import BannerImage from "../Dashboard/BannerImage";
import AddProductCategory from "../Dashboard/AddProductCategory";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory";
// import AdminHome from "../Dashboard/AdminHome";
import InvoicePage from "../Dashboard/InvoicePage";
import JoinUs from "../Components/JoinUs/JoinUs";
import UserPaymentHistory from "../Dashboard/UserPaymentHistory";
import DashboardHome from "../Dashboard/DashboardHome";
// import DashboardHome from "../Dashboard/DashboardHome";


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
        element: <Categories/>
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
        path: '/payment',
        element: <PrivateRoute><Payment/></PrivateRoute>
      },
      {
        path: '/joinUs',
        element: <JoinUs/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardHome /></PrivateRoute>
      },
      {
        path: '/dashboard/shop',
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
        loader: ({params}) => fetch(`https://medi-trust-pharma-server.vercel.app/product/${params._id}`),
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
      {
        path: '/dashboard/userPaymentHistory',
        element: <UserPaymentHistory/>
      },
    ]
  },
  {
    path: '/InvoicePage',
    element: <InvoicePage/>
  }
]);
