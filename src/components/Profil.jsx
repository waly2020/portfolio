import { APP_ASSETS } from "../utils/assets";

const Profil = () => {
    return (
        <div className="w-[400px] h-[400px]">
            <img src={APP_ASSETS.photo_2} className="w-full h-full object-cover rounded-[999px]"/>
        </div>
    );
}

export default Profil;