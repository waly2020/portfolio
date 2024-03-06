import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub, FaXTwitter, FaSquareWhatsapp} from "react-icons/fa6";
import PageModel from "../../components/PageModel";
import { APP_ASSETS } from "../../utils/assets";
import RsIcon from "../../components/RsIcon";
import Profil from "../../components/Profil";
import ButtonCv from "../../components/ButtonCv";

const Home = () => {
    return (
        <PageModel className="grid grid-cols-2 grid-rows-[70px,1fr]">
            <header className="col-span-2">
                <img src={APP_ASSETS.logo} className="h-full object-cover"/>
            </header>
            <div className="grid grid-cols-[50px,1fr]">
                <div className="flex flex-col gap-3 justify-end items-center py-4">
                    <RsIcon>
                        <FaFacebookSquare/>
                    </RsIcon>
                    <RsIcon>
                        <FaLinkedin/>
                    </RsIcon>
                    <RsIcon>
                        <FaSquareGithub/>
                    </RsIcon>
                    <RsIcon>
                        <FaSquareWhatsapp/>
                    </RsIcon>
                    <RsIcon>
                        <FaXTwitter/>
                    </RsIcon>
                </div>
                <div className="flex justify-center items-center">
                    <Profil/>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    <h3>Hello, je suis</h3>
                    <h1 className="text-[3em] font-bold">Mintsa Jean-Bosco</h1>
                    <h2 className="text-[1.3rem] uppercase">Devloppeur web et Mobile Frontend</h2>
                    <p className="w-full max-w-[450px]">Apprenant a l'école 241 où j'ai appris à apprendre et le travail en équipe, ce qui fait de moi un développeur capable de s'adapter.</p>
                    <ButtonCv/>
                </div>
            </div>
        </PageModel>
    );
}

export default Home;