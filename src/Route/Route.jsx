import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import Instructors from "../Pages/Home/Instrustors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import Private from "./Private";
import MySelectedClass from "../Pages/DashBoard/User/MySelectedClass";
import MyEnrolledClasses from "../Pages/DashBoard/User/MyEnrolledClasses";
import Payment from "../Pages/DashBoard/User/Payment";
import PaymentHistory from "../Pages/DashBoard/User/PaymentHistory";
import AddClass from "../Pages/DashBoard/Instructor/AddClass";
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers";
import ErrorPage from "../Component/ErrorPage";
import ClassUpdate from "../Pages/DashBoard/Instructor/ClassUpdate";
import Anime from "../Component/Anime";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>,
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },

        ]
    },

    {
        path: "/dashboard",
        element: <Private><DashBoard></DashBoard></Private>,
        children: [

            {
                path: "home",
                element: <Anime></Anime>
            },
            // Student Dashboard 
            {
                path: "mySelectedClass",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "myEnrolledClasses",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },



            // Instructor Dashboard
            {
                path: "addClass",
                element: <AddClass></AddClass>
            },
            {
                path: "myClasses",
                element: <MyClasses></MyClasses>
            },
            {
                path: "updateClass/:id",
                element: <ClassUpdate></ClassUpdate>
            },


            // Admin Dashboard
            {
                path: "manageClasses",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "manageUsers",
                element: <ManageUsers></ManageUsers>
            },

        ]
    },
])