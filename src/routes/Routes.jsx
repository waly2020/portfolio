import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";
import Error from "../pages/error/Error";
import About from "../pages/About/About";
import Course from "../pages/Course/Course";
import Skills from "../pages/Skills/Skills";

const routes = createBrowserRouter([{
    path : "/",
    element : <Layout/>,
    // errorElement : <Error/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "about",
            element : <About/>
        },
        {
            path : "course",
            element : <Course/>
        },
        {
            path : "skills",
            element : <Skills/>
        }
    ]
}])
const Routes = () => { 
    return (
        <>
            <RouterProvider router={routes}/>
        </>
    );
}

export default Routes;