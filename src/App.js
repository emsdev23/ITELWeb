
import './App.css';
import Navbar from './Dashboard/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Dashboard/Home/Home';
import Aboutus from './Dashboard/AboutUs/Aboutus';

function App() {
  return (
<Router>

     <Navbar/>
     
       <Routes> 
       <Route path="/" element={<Home />} />
       <Route path="/AboutUs" element={<Aboutus />} />
       
       </Routes>
     </Router>
 
  );
}

export default App;
