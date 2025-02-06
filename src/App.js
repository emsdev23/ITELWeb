import "./App.css";
import Navbar from "./Dashboard/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Dashboard/Home/Home";
import Aboutus from "./Dashboard/AboutUs/Aboutus";
import AdvisorBoard from "./Dashboard/AboutUs/AdvisorBoard";
import TechAdvisor from "./Dashboard/AboutUs/TechAdvisor";
import IncubationItel from "./Dashboard/AboutUs/IncubationItel";
import IncubatedCompanies from "./Dashboard/Incubatees/IncubatedCompanies";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/AdvisorBoard" element={<AdvisorBoard />} />
        <Route path="/TechAdvisor" element={<TechAdvisor />} />
        <Route path="/incubationItel" element={<IncubationItel />} />
        <Route path="/IncubatedCompanies" element={<IncubatedCompanies />} />
      </Routes>
    </Router>
  );
}

export default App;
