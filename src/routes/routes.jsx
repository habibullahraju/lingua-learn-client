import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import SelectedClass from "../Dashboard/SelectedClass/SelectedClass";
import PrivateRoute from "./PrivateRoute";
import AddClasses from "../Dashboard/AddClasses/AddClasses";
import MyClasses from "../Dashboard/MyClasses/MyClasses";
import ManageCLasses from "../Dashboard/ManageClasses/ManageCLasses";
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import EnrolledClasses from "../Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/instructor',
          element: <AllInstructors></AllInstructors>
        },
        {
          path: '/all-classes',
          element: <AllClasses></AllClasses>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'selected-class',
          element: <SelectedClass></SelectedClass>
        },
        {
            path: 'enroll-classes',
            element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: '/dashboard/payment',
          element: <Payment></Payment>
        },
        {
          path: 'add-class',
          element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
        },
        {
          path: 'my-classes',
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: 'manage-classes',
          element: <AdminRoute><ManageCLasses></ManageCLasses></AdminRoute>
        },
        {
          path: 'manage-users',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        }
      ]
      
    }
  ]);