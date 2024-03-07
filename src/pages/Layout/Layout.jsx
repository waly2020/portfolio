import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

const Layout = () => {
    return (
        <div className="grid grid-cols-[1fr,100px] min-h-[100vh] p-4 gap-4 page-main">
           <Outlet/>
           <div className="flex justify-center items-center h-[95vh]">
           <Navigation/>
           </div>
        </div>
    );
}

export default Layout;