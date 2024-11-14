import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path:'',
                element:<Navigate to={'category/0'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:()=> fetch(`/news.json`),
            }
        ]
    },
    {
        path:'/news',
        element:<h2>News</h2>
    },
    {
        path:'/auth',
        element:<h2>Login</h2>
    },
    {
        path:'*',
        element:<h2>Error</h2>
    }

])

export default router 