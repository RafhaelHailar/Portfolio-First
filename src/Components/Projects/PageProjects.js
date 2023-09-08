import PortfolioImage1 from "../../images/portfolio-1.png";
import EvoWarsImage from "../../images/evowars.webp";
import PhotoshopImage from "../../images/photoshop.jpg";
import LongStickImage from "../../images/longstick.png";
import RushypeImage from "../../images/rushype.png";
import ProjectPreview from "./Components/ProjectPreview";

const PageProjects = () => {
    return (
        <div id="projects">
            <h1 className="title">projects</h1>
            <div className="projects-container">
                <div className="project big" style={{transform : "translate(-32rem,-13rem)"}}>
                    MyProject
                    <div className="">
                        <img src={PortfolioImage1} className="hide"/>
                    </div>
                </div>
                <div className="project medium" style={{transform : "translate(0rem,-9rem)"}}>
                    FraImage
                    <div className="">
                        <img src={PhotoshopImage} className="hide"/>
                    </div>
                </div>
                <div className="project small" style={{transform : "translate(-25rem,-1rem)"}}>
                    EvoWars_Copy
                    <div className="">
                        <img src={EvoWarsImage} className="hide"/>
                    </div>
                </div>
                <div className="project small" style={{transform : "translate(2rem,1rem)"}}>
                    Long_Stick
                    <div className="">
                        <img src={LongStickImage} className="hide"/>
                    </div>
                </div>
                <div className="project small" style={{transform : "translate(-12rem,5rem)"}}>
                    Rushype
                    <div className="">
                        <img src={RushypeImage  } className="hide"/>
                    </div>
                </div>
                <div className="project big" style={{transform : "translate(10rem,10rem)"}}>
                    MyProject
                    <div className="">
                        <img src={PortfolioImage1} className="hide"/>
                    </div>
                </div>
                <div className="project big" style={{transform : "translate(-30rem,15rem)"}}>
                    MyProject
                    <div className="">
                        <img src={PortfolioImage1} className="hide"/>
                    </div>
                </div>
            </div>
            <ProjectPreview></ProjectPreview>
        </div>
    );
}

export default PageProjects;