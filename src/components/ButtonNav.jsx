import { NavLink } from "react-router-dom";

const ButtonNav = ({to = "#",children}) => {
    return (
        <NavLink to={to} className="p-4 shadow-3d">{children}</NavLink>
    );
}

export default ButtonNav;