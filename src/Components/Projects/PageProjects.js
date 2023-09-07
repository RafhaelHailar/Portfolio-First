import PortfolioImage1 from "../../images/portfolio-1.png";

const PageProjects = () => {
    return (
        <div id="projects">
            <h1 className="title">Projects</h1>
            <div className="projects-container">
                <div className="project big" style={{transform : "translate(-32rem,-13rem)"}}>
                    MyProject
                    <div className="">
                        <img src={PortfolioImage1} className="hide"/>
                    </div>
                </div>
                <div className="project medium" style={{transform : "translate(0rem,-9rem)"}}>
                    FraImage
                </div>
                <div className="project small" style={{transform : "translate(-25rem,-1rem)"}}>
                    EvoWars_Copy
                </div>
                <div className="project small" style={{transform : "translate(2rem,1rem)"}}>
                    Long_Stick
                </div>
                <div className="project small" style={{transform : "translate(-12rem,5rem)"}}>
                    Rushype
                </div>
                <div className="project big" style={{transform : "translate(10rem,10rem)"}}>
                    MyProject
                </div>
                <div className="project big" style={{transform : "translate(-30rem,15rem)"}}>
                    MyProject
                </div>
            </div>
        </div>
    );
}

export default PageProjects;