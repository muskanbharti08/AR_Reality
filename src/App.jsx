
import {Routes,Route} from "react-router-dom";
import Nav from "./Components/Nav";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Residency from "./Components/Residency";
import Commercial from "./Components/Commercial";
import Developer from "./Components/Developer";
import Order from "./Components/Order";
import Footer1 from "./Components/Footer1";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ScrollIntoView from "react-scroll-into-view";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function App() {
  return (
  <>
    

<div id= "id1" className=""></div>

  <Nav/>

    <Routes>
     
      <Route path="/"  element={<Home/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/rproperty"  element={<Residency/>}   />
      <Route path="/cproperty"  element={<Commercial/>}   />
      <Route path="/dev"   element={<Developer/>}/>
      <Route path="/order"   element={<Order/>}/>
    </Routes>
    

<div className="fixed bottom-5 left-5 ">
<a href="tel:9717191415" className="text-white border rounded-full p-2 bg-blue-800"><CallIcon/></a>
</div>


<div className="fixed bottom-16 left-5 ">
<a href="https://api.whatsapp.com/send?phone=+919717191415" className="text-white border rounded-full py-3 px-3 bg-green-800 "><WhatsAppIcon/></a>
</div>

 <Footer1/>
<div className="fixed bottom-5 right-5 text-white bg-blue-700 rounded-full p-2 hover:bg-blue-800">
<ScrollIntoView selector="#id1">
  <ArrowUpwardIcon/>
</ScrollIntoView>
  
</div>
  </>
  )
}

export default App
