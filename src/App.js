
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
   
   <Navbar/>
      
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/newproject" element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <Footer/>
      <div>testeaaa</div>
     
    </Router>
  );
}

export default App;
