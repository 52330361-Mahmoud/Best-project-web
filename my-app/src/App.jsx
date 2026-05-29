
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "./pages/Home";
import BMW from './pages/BMW';
import Mercedes from './pages/Mercedes';
import Audi from './pages/Audi';
import Ferrari from './pages/Ferrari';

function App() {



 return(
    <div>
  <Router>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/BMW" element={<BMW/>} />
      <Route path="/Mercedes" element={<Mercedes/>} />
      <Route path="/Audi" element={<Audi/>} />
      <Route path="/Ferrari" element={<Ferrari/>} />
     
    </Routes>
    <Footer/>
  
  </Router>
  </div>

 )
};
export default App;
