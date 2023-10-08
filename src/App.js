import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Work from "./Components/Work/Work.jsx";
import Cont1 from "./Components/contact/cont1.jsx";
// import Contact from "./Components/contact/contact.jsx";
import Intro from "./Components/intro/intro.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Cont1 />
      <Footer />
    </div>
  );
}

export default App;
