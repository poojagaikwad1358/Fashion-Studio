import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from './Components/Wrapper';
import ContactUs from './Components/ContactUs';
import Collections from './Components/Collections'
import AboutUs from './Components/AboutUs';
import Login from './Components/Login'
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>             
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/wrapper" element={<Wrapper />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>      
    </div>
  );
}

export default App;
