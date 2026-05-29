import { Link } from "react-router-dom"
import"./Navbar.css";

function Navbar() {
  return (

   

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <h2 className="navbar-brand">LUXURY CARS</h2>

        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <Link to="/" className="nav-link fs-4">Home</Link>
          <Link to="/BMW" className="nav-link fs-4">BMW</Link>
          <Link to="/Mercedes" className="nav-link fs-4">Mercedes</Link>
          <Link to="/Audi" className="nav-link fs-4">Audi</Link>
          <Link to="/Ferrari" className="nav-link fs-4">Ferrari</Link>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;
