import LongStickImage from "../../../images/longstick.png";


const ProjectPreview = () => {
    return (
        <>
            <div className="wall">
                <div className="wallshow">
                </div>
                <div className="project-preview hide">
                    <button className="gotoProjectsBtn prevProjLink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="23" viewBox="0 0 83 23" fill="none">
                        <path d="M81.307 9.27144C80.9682 8.368 79.0248 8.69449 78.3996 8.68996C70.5721 8.63324 62.742 8.68996 54.9144 8.68996C38.9669 8.68996 23.0194 8.68996 7.07183 8.68996C2.54296 8.68996 2.65509 8.32256 6.61957 6.88093C8.89053 6.05512 11.0037 4.097 13.3065 3.52129C15.0657 3.0815 16.8204 1.50036 14.0495 2.68138C10.747 4.08902 7.61148 6.35337 4.87514 8.65766C3.40027 9.89966 0.945923 10.4031 3.38915 12.2434C9.30573 16.7001 17.8224 19.0126 24.9038 20.901" stroke="#665132" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                        Go Back! 
                    </button>
                    <div className="project-target">
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae vitae iste facilis libero ratione suscipit! Natus ea odio ullam tempore laborum facere ex veniam ducimus provident, a unde id tempora reiciendis quod! Adipisci, consequatur?
                            <div className="others container-fluid">
                                <div className="row">
                                    <div className="tools col-6">
                                        <h3 style={{fontWeight:"700"}}>TOOLS</h3>
                                        <div>
                                            <span>#HTML</span>
                                            <span>#CSS</span>
                                            <span>#Javascript</span>
                                            <span>#LOVEUwU</span>
                                        </div>
                                    </div>
                                    <div className="actions col-6">
                                        <a href="" className="prevProjLink">Code</a>
                                        <a href="https://rafhaelhailar.github.io/Long-Stick/" className="prevProjLink" target="_blank">Live Demo</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="image-preview">
                            <img src={LongStickImage}/>
                        </div>
                        <div className="name">Long Stick</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectPreview;