import Content from "./Components/Content";
import NavigationBar from "./Components/NavigationBar";

const PageHeader = () => {
    return (
        <>
            <div style={{position : "relative",height : "100vh"}}>
                <NavigationBar></NavigationBar>
                <Content></Content>
            </div>
        </>
    );
}

export default PageHeader;