import "./index.css";
import Navbar from "./components/Navbar";
import Figure from "./components/Figure";
import Heroe from "./components/Heroe";
import Main from "./components/Main";
import  SeccionMain  from "./components/Seccion";
import Testimonios from "./components/Testimonios";
import SeccionFooter from "./components/SeccionFotter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar>
        <Figure />
      </Navbar>
      <Heroe/>
      <Main>
          <SeccionMain/>
          <Testimonios/>
          <SeccionFooter/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
