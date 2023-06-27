import { createBrowserRouter } from "react-router-dom";
import Banner from "../Shear/Banner/Banner";
import Home from '../Shear/home/Home';
import BLog from "../Shear/BLog";
import Profile from "../Shear/login/Profile";
import Login from "../Shear/login/Login";
import Register from "../Shear/login/Register";

import Chef from "../Shear/home/Chef";
import ChefsDetail from "../Shear/home/ChefsDetail";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router=createBrowserRouter([
   
    {
        path:'/',
        element:<Banner></Banner>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://bangladesh-foodie-server-ritupriya-chowdhury.vercel.app/chefs/')
        
            },
            
        {
            path:'/blog',
            element:<BLog></BLog>

        },
        {
            path:'/profile',
            element:<Profile></Profile>

        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/register',
            element:<Register></Register>

        },
        {
           path:'/:id',
           element:<PrivetRoute>
            <ChefsDetail></ChefsDetail>,

           </PrivetRoute>,
           loader:({params})=>fetch(`https://bangladesh-foodie-server-ritupriya-chowdhury.vercel.app/chefs/${params.id}`)
           
        },
        {
            path:'*',
            element: <div className="text-center text-3xl my-8 text-red-400">404 Not found!! Search using another keyword...</div>
        }

    ]

    }
]);
export default router;