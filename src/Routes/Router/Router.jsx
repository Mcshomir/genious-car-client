import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Oders from "../../Pages/Oders/Oders";
import PrivetRouter from "../PrivetRouter/PrivetRouter";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            { path: '/', element: <Home></Home> },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://genius-car-server-three-jade.vercel.app/service/${params.id}`)

            },
            {
                path: '/orders',
                element: <Oders></Oders>
            },
            { path: '/signin', element: <SignIn></SignIn> },
            { path: '/signup', element: <SignUp></SignUp> },
            { path: '/*', element: <h1>Not found ! 404</h1> }
        ]
    }
])