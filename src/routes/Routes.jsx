import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";
import Error from "../pages/error/Error";
import About from "../pages/About/About";

const routes = createBrowserRouter([{
    path : "/",
    element : <Layout/>,
    errorElement : <Error/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "about",
            element : <About/>
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