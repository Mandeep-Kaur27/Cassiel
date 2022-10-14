import Favicon from "react-favicon";
import FavIcon from "./assets/favicon.png";
import Header from "./viewport/header";
import Footer from "./viewport/footer";
import Main from "./viewport/main";

function App() {
  return (
    
    <div className="wrapper">
       <Favicon url={FavIcon}></Favicon>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
