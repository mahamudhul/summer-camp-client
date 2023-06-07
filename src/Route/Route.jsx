import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import Instructors from "../Pages/Home/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import DashBoard from "../Layout/DashBoard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
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
        element: <DashBoard></DashBoard>
    }

])