import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/constaint/Header";
import Footer from "./components/constaint/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Contact_page from "./page/Contact_page";
import C_programming from "./components/course/C_Programming";
import Cpp_programming from "./components/course/Cpp_Programming";

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/c_programming" element={<C_programming />} />
          <Route path="/cpp_programming" element={<Cpp_programming />} />
        </Routes>
      </Router>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
