import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Background from "./Components/Background";
import PageHeader from "./Components/Header/PageHeader";
import PageProjects from './Components/Projects/PageProjects';
import MouseIndicator from './Components/MouseIndicator';


function App() {
  return (
    <>
      <Background></Background>
      <PageHeader></PageHeader>
      <PageProjects></PageProjects>
      <MouseIndicator></MouseIndicator>
    </>
  );
}

export default App;
