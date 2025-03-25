import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import InsMyClasses from "../pages/Dashboard/InstructorDashboard/InsMyClasses/InsMyClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "classes",
                element: <Classes></Classes>,
                loader: () => fetch('http://localhost:5000/classes')
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'insMyClasses',
                element: <InsMyClasses></InsMyClasses>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },

            // User Route
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'selectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    }
]);

export default router;