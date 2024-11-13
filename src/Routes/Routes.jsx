import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
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