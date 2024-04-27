import "./App.css";
import { Hero } from "./Component/Hero/Hero";
import { Footer } from "./Component/Footer/Footer";
import { Skills } from "./Component/Skills/Skills";
import { Projects } from "./Component/Projects/Projects";
import { Nav } from "./Component/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />

      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
