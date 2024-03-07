import { BsShop } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { LiaSchoolSolid,LiaProjectDiagramSolid } from "react-icons/lia";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import ButtonNav from "./ButtonNav";

const Navigation = () => {
    return (
        <nav className="flex flex-col justify-center items-center rounded-lg gap-2 shadow-3d h-[90vh] w-full">
            <ButtonNav to="/"><BsShop/></ButtonNav>
            <ButtonNav to="/about"><RiContactsLine/></ButtonNav>
            {/* Ecole et Exp */}
            <ButtonNav to="/course"><LiaSchoolSolid/></ButtonNav>
            <ButtonNav to="/skills"><LiaProjectDiagramSolid/></ButtonNav>
            <ButtonNav to="/portfolio"><GrProjects/></ButtonNav>
            <ButtonNav to="/contact"><MdOutlineContactPhone/></ButtonNav>
        </nav>
    );
}

export default Navigation;