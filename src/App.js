import Nav from "./components/Nav";
import Featured from "./components/Featured";
import Section from "./components/Section";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="main">
        <Nav />
        <Featured />
      </div>
      <Section />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
