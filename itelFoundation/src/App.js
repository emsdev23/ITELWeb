import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Home/Home";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import Home from "./pages/Home/Home";
import Incubatees from "./pages/Incubatees/Incubatees";
import AboutUs from "./pages/AboutUs/AboutUs";
import Initiative1 from "./pages/TeachInitiatives/Initiative1";
import Initiative2 from "./pages/TeachInitiatives/Initiative2";
import Initiative3 from "./pages/TeachInitiatives/Initiative3";
import Initiative4 from "./pages/TeachInitiatives/Initiative4";
import Initiative5 from "./pages/TeachInitiatives/Initiative5";
import Initiative6 from "./pages/TeachInitiatives/Initiative6";
import Initiative7 from "./pages/TeachInitiatives/Initiative7";
import Initiative8 from "./pages/TeachInitiatives/Initiative8";

import AdvisorBoard from "./pages/CommiteeMembers/AdvisorBoard";
import IncubationItel from "./pages/CommiteeMembers/IncubationItel";
import TechAdvisor from "./pages/CommiteeMembers/TechAdvisor";

import Partnership from "./pages/Partnership/Partnership";

import ScrollToTop from "./ScrollToTop ";

import Navbar from "./Navbar ";
import Careers from "./pages/Careers/Careers";
import Footer from "./pages/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/incubatees" element={<Incubatees />} />
        <Route path="/Initiavites/Transportation" element={<Initiative1 />} />
        <Route path="/Initiavites/Heating&Cooling" element={<Initiative2 />} />

        <Route
          path="/Initiavites/FintechforInclusion"
          element={<Initiative3 />}
        />
        <Route path="/Initiavites/FloodMitigation" element={<Initiative4 />} />
        <Route path="/Initiavites/CleanEnergy" element={<Initiative5 />} />
        <Route
          path="/Initiavites/AssistiveTechnology"
          element={<Initiative6 />}
        />
        <Route path="/Initiavites/RISCV" element={<Initiative7 />} />
        <Route path="/Initiavites/CyberSecurity" element={<Initiative8 />} />
        <Route path="/AdvisoryCommitteeMembers" element={<AdvisorBoard />} />
        <Route path="/ITELIncubationCommittee" element={<IncubationItel />} />
        <Route path="/TechnicalAdvisoryCommittee" element={<TechAdvisor />} />

        <Route path="/Partnerships" element={<Partnership />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
