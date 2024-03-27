
import {Routes,Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Residency from "./Components/Residency";
import Commercial from "./Components/Commercial";
import Developer from "./Components/Developer";




function App() {
  return (
  <>
  <Nav/>

    <Routes>
     
      <Route path="/"  element={<Home/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/rproperty"  element={<Residency/>}   />
      <Route path="/cproperty"  element={<Commercial/>}   />
      <Route path="/dev"   element={<Developer/>}/>
    </Routes>



  <Footer/>
  </>
  )
}

export default App
