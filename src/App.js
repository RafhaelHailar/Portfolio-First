import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Background from "./Components/Background";
import PageHeader from "./Components/Header/PageHeader";
import PageProjects from './Components/Projects/PageProjects';
import PageAbout from './Components/About/PageAbout';
import PageContact from './Components/Contact/PageContact';
import MouseIndicator from './Components/MouseIndicator';

function App() {
  return (
    <>
      <Background></Background>
      <PageHeader></PageHeader>
      <PageProjects></PageProjects>
      <PageAbout></PageAbout>
      <PageContact></PageContact>
      <div id='footer'>

        
      </div>
      <MouseIndicator></MouseIndicator>

    </>
  );
}

export default App;
