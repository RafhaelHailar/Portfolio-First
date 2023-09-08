import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 ,faCss3Alt , faJs , faGitAlt , faNode , faReact , faBootstrap} from "@fortawesome/free-brands-svg-icons";

const PageAbout = () => {
    return (
        <>
            <div id="about">
            <div className="title">
                    <span></span>
                    <div className="name">
                        about
                        <svg xmlns="http://www.w3.org/2000/svg" width="416" height="96" viewBox="0 0 416 96" fill="none">
                            <path d="M414.383 3.18575C413.138 -0.133717 394.835 4.96016 393.249 5.26713C375.935 8.61818 358.43 11.9598 341.801 17.9155C318.383 26.3031 295.793 34.5422 273.223 45.1869C253.708 54.3903 234.436 62.85 213.717 68.9359C197.2 73.7874 181.56 77.3689 164.297 77.1013C142.101 76.7572 120.483 74.3905 98.4404 72.2448C81.1512 70.5617 63.6285 70.5213 46.8863 75.5536C31.3391 80.2267 16.4856 86.7461 2.27008 94.4461" stroke="#F0C5BC" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span></span>
                </div>
                <p style={{paddingTop : "20rem"}}>
                    I like to look at the screen and waste my time, or watch some people waste their time that makes me waste my time too.Because wasting time is the thing I’ve grown to , if you were reading this you might be wasting your time too.
                </p>
                <div className="knowledges">
                    <div style={{flexBasis:"100%"}}>
                        <h2>I know...</h2>
                        <p style={{fontSize : "1rem",fontWeight : "bold",textAlign : "right"}}>From 0% Ignorant - 100% Mastery</p>
                    </div>
                    <div className="items">
                        <div><FontAwesomeIcon icon={faHtml5} style={{color  : "#e34c26"}} /> <span className="percent">9.9%</span></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} style={{color : "#264de4"}} /> <span className="percent">9.9%</span></div>
                        <div><FontAwesomeIcon icon={faBootstrap} style={{color : "#563d7c"}}/> <span className="percent">50%</span></div>
                        <div><FontAwesomeIcon icon={faJs} style={{color : "#F0DB4F"}} /> <span className="percent">9.9%</span></div>
                        <div><FontAwesomeIcon icon={faGitAlt} style={{color : "#F1502F"}}/> <span className="percent">40%</span></div>
                        <div><FontAwesomeIcon icon={faNode} style={{color : "#3c873a"}} /> <span className="percent">40%</span></div>
                        <div><FontAwesomeIcon icon={faReact} style={{color : "#61DBFB"}}/> <span className="percent">20%</span></div>
                    </div>         
                </div>
            </div>
        </>
    );
} 


export default PageAbout;