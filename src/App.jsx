import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
} from "./components";
import LeafCanvas from "./components/canvas/Leaf";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.appSection}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <div className={styles.appContact}>
          <Contact />
          <LeafCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
