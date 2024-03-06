import PageModel from "../../components/PageModel";
import TitleShadow from "../../components/TitleShadow";

const About = () => {
    return (
        <PageModel>
            <div className="p-3">
                <TitleShadow text="Qui suis-je ?" shadowText="A propos de moi"/>
                {/* <TitleShadow text="Mon nom est waly le dev"/> */}
                {/* <TitleShadow text="hello"/> */}
            </div>
        </PageModel>
    );
}

export default About;