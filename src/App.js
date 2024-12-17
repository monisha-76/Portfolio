
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";

function App() { 
  return ( 
      <>
        <Header/>
      
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/portfolio" element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      </>
       
   );
  
}

export default App;
