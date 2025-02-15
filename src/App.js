import "./App.css";
import Navbar from "./Dashboard/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";
import Home from "./Dashboard/Home/Home";
import Aboutus from "./Dashboard/AboutUs/Aboutus";
import AdvisorBoard from "./Dashboard/AboutUs/AdvisorBoard";
import TechAdvisor from "./Dashboard/AboutUs/TechAdvisor";
import IncubationItel from "./Dashboard/AboutUs/IncubationItel";
import IncubatedCompanies from "./Dashboard/Incubatees/IncubatedCompanies";
import Initiative1 from "./Dashboard/TechInitiatives/Initiative1";
import Initiative2 from "./Dashboard/TechInitiatives/Initiative2";
import Initiative3 from "./Dashboard/TechInitiatives/Initiative3";
import Initiative4 from "./Dashboard/TechInitiatives/Initiative4";
import Initiative5 from "./Dashboard/TechInitiatives/Initiative5";
import Initiative6 from "./Dashboard/TechInitiatives/Initiative6";
import Initiative7 from "./Dashboard/TechInitiatives/Initiative7";
import Initiative8 from "./Dashboard/TechInitiatives/Initiative8";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/AdvisorBoard" element={<AdvisorBoard />} />
        <Route path="/TechAdvisor" element={<TechAdvisor />} />
        <Route path="/incubationItel" element={<IncubationItel />} />
        <Route path="/IncubatedCompanies" element={<IncubatedCompanies />} />
        <Route path="/Transportation" element={<Initiative1 />} />
        <Route path="/Heating&Cooling" element={<Initiative2 />} />
        <Route path="/FintechforInclusion" element={<Initiative3 />} />
        <Route path="/FloodMitigation" element={<Initiative4 />} />
        <Route path="/CleanEnergy" element={<Initiative5 />} />
        <Route path="/AssistiveTechnology" element={<Initiative6 />} />
        <Route path="/RISCV" element={<Initiative7 />} />
        <Route path="/CyberSecurity" element={<Initiative8 />} />
      </Routes>
    </Router>
  );
}

export default App;
