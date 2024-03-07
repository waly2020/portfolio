import Lorem from "../../components/Lorem";
import PageModel from "../../components/PageModel";
import TitleShadow from "../../components/TitleShadow";

const About = () => {
    return (
        <PageModel className="flex items-center">
            <div className="p-3">
                <TitleShadow className="my-4" text="Qui suis-je ?" shadowText="A propos de moi"/>
                <Lorem word={100} className="w-full max-w-[900px]"/>
            </div>
        </PageModel>
    );
}

export default About;