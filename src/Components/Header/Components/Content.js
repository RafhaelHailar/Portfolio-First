import { Container , Row, Col } from "react-bootstrap";
import BusinessMonkey from "../../../images/bisnis-mungki.png";
import { useEffect , useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faTwitter , faGithub } from "@fortawesome/free-brands-svg-icons";

const types = ["games","software","website"];

const Content = () => {
    let [count,setCount] = useState(0);

    useEffect(
        () => {
            setTimeout(
                function() {
                    const cover = document.querySelector(".cover");
                    cover.style.transform = "scaleX(1)";
                    cover.style.transformOrigin = "left";
                    setTimeout(function() {
                        setCount(count => (count + 1) % (types.length));

                        cover.style.transform = "scaleX(0)";
                        cover.style.transformOrigin = "right";
                    },1000);
                }
            ,3000)
        }
    )
    return (
        <>
            <Container style={{marginTop : "5rem",padding : "0 5rem"}}>
                <Row>
                    <Col style={{paddingTop:"5rem",position : "relative"}}>
                        <h3 style={{fontSize:"2.1rem",fontWeight:"bold",position:"relative"}}>Hi , my name is <span style={{background : "#F0C5BC   ",color : "#665132", padding : "0.5rem 1rem",position:"absolute",transform:"translate(5%,-15%)"}}>Rafhael D. Hailar</span></h3>
                        <h3 style={{fontSize:"1.8rem",fontWeight:"",marginTop: "1.4rem"}}>I like developing and destroying things, it makes me happy to destroy what I've made.  </h3>
                        <h3 style={{fontSize:"1.8rem",fontWeight:"",marginTop:"0rem"}}>I develop and design <span className="type"><span className="cover"></span><span className="target">{types[count]}</span></span></h3>
                        <div className="download-resume">
                            <div>Download</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="78" viewBox="0 0 114 78" fill="none">
                                <path d="M112.178 2.35634C111.562 -0.104375 100.263 10.9383 98.8602 12.2618C93.8242 17.0127 87.3367 20.6833 82.9566 26.0743C76.9908 33.4168 72.5559 41.6646 72.5559 51.3882C72.5559 54.1631 76.9497 54.1712 78.9394 53.8095C81.4607 53.3511 85.1533 48.3027 86.2033 45.9402C91.2469 34.5922 67.7973 43.1612 64.8516 44.9496C61.7104 46.8568 56.2411 47.1103 53.7356 49.352C50.0347 52.6634 44.6077 54.8646 39.7029 55.8456C30.4338 57.6994 21.2537 60.7983 11.6375 60.7983C9.32591 60.7983 2.44715 61.6788 4.75878 61.6788C6.60138 61.6788 8.51685 54.1032 9.60143 52.874C11.6264 50.579 8.58003 53.8053 8.11562 54.4148C6.1727 56.9649 4.72545 59.7799 2.7777 62.2841C-1.00099 67.1424 10.0557 73.9522 13.1234 75.6564" stroke="#665132" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <a className="resume-btn-con" href="../../../images/bisnis-mungki.png" download="virus.exe.png"><button className="resume-btn">Resume<span></span></button></a>

                        <div className="socials">
                            <a href="#"><FontAwesomeIcon style={{color : "rgb(66,103,178)"}} icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon style={{color : "#1DA1F2"}} icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon style={{color : "black"}} icon={faGithub} /></a>
                        </div>
                    </Col>
                    <Col style={{margin:"auto",position : "relative"}}>
                        <div className="header-image-container">
                            <img src={BusinessMonkey} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="scrollDownMessage">
                <div>Scroll <br/> Down!</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="237" viewBox="0 0 34 237" fill="none">
                    <path d="M22.3696 2.95979C21.7633 -1.8906 12.3596 13.1798 11.9994 13.985C7.21154 24.6873 5.66811 34.0441 5.66811 45.5869C5.66811 52.198 4.94812 59.3245 6.86888 65.727C8.81475 72.2132 12.1446 73.7521 17.3483 76.643C25.7257 81.2971 26.5231 70.6751 26.2994 64.6354C26.12 59.7907 15.6642 65.655 13.3093 65.8361C5.7756 66.4157 6.35084 87.9452 5.66811 91.8709C2.9918 107.26 2.00309 123.437 2.72078 139.083C3.29119 151.518 11.3906 157.201 22.8609 153.71C28.4281 152.016 35.2509 145.45 30.0654 140.065C16.5567 126.037 15.4925 160.896 15.4925 166.482C15.4925 171.48 15.1446 176.672 15.7109 181.655C16.4033 187.749 18.4399 193.283 18.4399 199.448C18.4399 206.161 18.7977 212.614 16.9116 219.097C16.6289 220.069 16.955 225.627 15.9292 225.92C12.5249 226.892 6.95325 215.827 5.66811 213.257C4.80359 211.528 0.829203 207.301 2.33872 208.509C5.66266 211.168 7.42162 216.393 10.0345 219.752C12.4279 222.829 13.8627 226.04 15.9292 229.14C16.533 230.046 17.8401 230.512 18.2215 231.542C18.4093 232.048 18.146 234.707 18.9311 234.707C19.2814 234.707 20.2056 225.79 20.5685 224.883C23.1711 218.376 26.5876 212.51 31.2116 207.308" stroke="#665132" strokeWidth="3"/>
                </svg>
            </div>
        </>
    );
}

export default Content;