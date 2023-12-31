import {Container, Nav, Navbar} from 'react-bootstrap';

const NavigationBar = () => {
    return (
      <>
          <Navbar expand="lg" style={{padding : "1rem 10rem"}}>
            <Container>
              <Navbar.Brand href="#home" style={{fontFamily : " 'Kaushan Script', cursive",fontSize:"3rem",color : "#665132"}}>R.H</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto page-actions" style={{gap : "6rem"}}>
                  <Nav.Link href="#projects">
                    PROJECTS              
                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="63" viewBox="0 0 165 63" fill="none">
                  <   path d="M2 25.5465C3.92456 31.7254 8.54466 35.3946 13.7424 39.0746C21.8773 44.8342 30.533 49.7471 39.7163 53.6308C50.6616 58.2597 61.7149 60.0755 73.5365 60.7737C92.3847 61.8867 110.866 61.6741 128.515 54.3884C133.817 52.1994 137.983 48.795 142.503 45.3516C148.503 40.7799 156.246 36.2917 159.088 28.9015C160.246 25.8903 162.076 19.8758 160.657 16.6721C158.722 12.301 151.761 9.25399 147.914 6.9319C144.095 4.6268 135.328 0.128012 130.571 2.84642C127.886 4.38044 127.464 7.97567 127.757 10.7739C128.469 17.577 134.476 21.7626 139.743 25.2219C147.405 30.2545 158.039 33.1127 163.688 40.6439" stroke="#665132" strokeWidth="3"/>
                    </svg>
                  </Nav.Link>
                  <Nav.Link href="#about">
                    ABOUT
                    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="72" viewBox="0 0 156 72" fill="none">
                      <path d="M2 55.7241C2.2095 57.4001 6.40031 58.5026 7.48997 58.9004C16.6814 62.256 26.756 64.0912 36.2731 66.2334C51.3888 69.6359 68.2224 71.6697 83.7221 69.5274C94.4661 68.0425 104.98 64.8277 115.25 61.4493C122.334 59.1191 132.654 57.4538 137.759 51.4105C142.871 45.3599 143.171 34.2763 143.171 26.9409C143.171 13.0387 134.164 4.1788 120.505 2.54976C113.852 1.75628 106.983 2.0792 100.31 2.0792C87.627 2.0792 74.5966 1.4742 62.0368 3.60854C57.2722 4.41821 49.2867 5.94426 47.8805 11.569C46.7333 16.1579 46.0254 23.9267 48.5863 28.1173C50.1555 30.6851 53.0126 32.4064 55.6449 33.6857C64.4719 37.976 74.5488 40.1733 83.9574 42.705C98.2377 46.5475 112.73 50.4968 127.289 53.1751C136.513 54.8721 146.031 55.1048 155.17 57.1358" stroke="#665132" strokeWidth="3"/>
                    </svg>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    CONTACT
                    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="72" viewBox="0 0 156 72" fill="none">
                      <path d="M2 55.7241C2.2095 57.4001 6.40031 58.5026 7.48997 58.9004C16.6814 62.256 26.756 64.0912 36.2731 66.2334C51.3888 69.6359 68.2224 71.6697 83.7221 69.5274C94.4661 68.0425 104.98 64.8277 115.25 61.4493C122.334 59.1191 132.654 57.4538 137.759 51.4105C142.871 45.3599 143.171 34.2763 143.171 26.9409C143.171 13.0387 134.164 4.1788 120.505 2.54976C113.852 1.75628 106.983 2.0792 100.31 2.0792C87.627 2.0792 74.5966 1.4742 62.0368 3.60854C57.2722 4.41821 49.2867 5.94426 47.8805 11.569C46.7333 16.1579 46.0254 23.9267 48.5863 28.1173C50.1555 30.6851 53.0126 32.4064 55.6449 33.6857C64.4719 37.976 74.5488 40.1733 83.9574 42.705C98.2377 46.5475 112.73 50.4968 127.289 53.1751C136.513 54.8721 146.031 55.1048 155.17 57.1358" stroke="#665132" strokeWidth="3"/>
                    </svg>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
    );    
}

export default NavigationBar;