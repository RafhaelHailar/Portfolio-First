import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 ,faCss3Alt , faJs , faGitAlt , faNode , faReact , faBootstrap} from "@fortawesome/free-brands-svg-icons";

const PageAbout = () => {
    return (
        <>
            <div id="about">
                <h1 className="title">about me</h1>
                <p>
                    I like to look at the screen and waste my time, or watch some people waste their time that makes me waste my time too.Because wasting time is the thing I’ve grown to , if you were reading this you might be wasting your time too.
                </p>
                <div className="knowledges">
                    <div style={{flexBasis:"100%"}}>
                        <h2>I know...</h2>
                        <p style={{fontSize : "1rem",fontWeight : "bold",textAlign : "right"}}>From 0% Ignorant - 100% Mastery</p>
                    </div>
                    <div className="items">
                        <div><FontAwesomeIcon icon={faHtml5} style={{color  : "#e34c26"}} /> <span className="percent">70%</span></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} style={{color : "#264de4"}} /> <span className="percent">70%</span></div>
                        <div><FontAwesomeIcon icon={faBootstrap} style={{color : "#563d7c"}}/> <span className="percent">50%</span></div>
                        <div><FontAwesomeIcon icon={faJs} style={{color : "#F0DB4F"}} /> <span className="percent">80%</span></div>
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