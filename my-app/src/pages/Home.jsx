import Cards from "../Components/Cards"
import BMW from "../assets/Bmw 1.png"
import Mercedes from "../assets/Mercedes1.png"
import Audi from "../assets/Audi.png"
import Ferrari from "../assets/Ferrari1.png"
import "./Home.css";
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
function Home(){
return(
        <div className="My home">

          

  
    <div className="px-0 text-center">
        <div className="top-bar">
<p>New 2026 Collection Available Now</p>
</div>
        </div>


<img src="/orange-car.jpeg" className="hero-img" alt="Error"/>
        
        <div className="brands text-center">
             <h2 className="Bs">Brands</h2>

             <div className="brand">
<Link to="/BMW">
<Cards src={BMW} title={"BMW"} />
</Link>

<Link to="Mercedes">
<Cards src={Mercedes} title={"Mercedes"}/>
</Link>

<Link to="/Audi">
<Cards src={Audi} title={"Audi"} />
</Link>

<Link to="/Ferrari">
<Cards src={Ferrari} title={"Ferrari"}/>
</Link>

             </div>
             
    </div>
    </div>
);
}
export default Home;
