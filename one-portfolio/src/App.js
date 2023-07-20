import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from './components/About'
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">

      <Navbar />
    <Home />
    <About />
    <Portfolio />
   <Experience />
   <SocialLinks />
    <Contact />
    </div>
  );
}

export default App;
