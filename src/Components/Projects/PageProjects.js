import PortfolioImage1 from "../../images/portfolio-1.png";
import EvoWarsImage from "../../images/evowars.webp";
import PhotoshopImage from "../../images/photoshop.jpg";
import LongStickImage from "../../images/longstick.png";
import RushypeImage from "../../images/rushype.png";
import ProjectPreview from "./Components/ProjectPreview";

const PageProjects = () => {
    return (
        <div id="projects">
            <div className="title">
                    <span></span>
                    <div className="name">
                        projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="416" height="96" viewBox="0 0 416 96" fill="none">
                            <path d="M414.383 3.18575C413.138 -0.133717 394.835 4.96016 393.249 5.26713C375.935 8.61818 358.43 11.9598 341.801 17.9155C318.383 26.3031 295.793 34.5422 273.223 45.1869C253.708 54.3903 234.436 62.85 213.717 68.9359C197.2 73.7874 181.56 77.3689 164.297 77.1013C142.101 76.7572 120.483 74.3905 98.4404 72.2448C81.1512 70.5617 63.6285 70.5213 46.8863 75.5536C31.3391 80.2267 16.4856 86.7461 2.27008 94.4461" stroke="#F0C5BC" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span></span>
            </div>
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