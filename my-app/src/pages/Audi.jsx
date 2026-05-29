import Audi1 from "../assets/Audi w2.webp";
import Audi2 from "../assets/Audi w1.webp";
import Audi3 from "../assets/Audi w3.webp";
import Audi4 from "../assets/Audi w4.webp"
import"./Audi.css";

import Cards from "../Components/Cards";
function Audi(){


return(



<div className="Audi-page">
    <p className="page-title">[ِAudi]اسطول  سيارات</p>
    
    <div className="Audi">


    <Cards src={Audi1} title={"Audi A4 sedan"}  Price="87,000"/>
    <Cards src={Audi2} title={"Audi A6 Executive"}  Price="72,000"/>
    <Cards src={Audi3} title={"Audi Q7 Family SUV"}  Price="93,000"/>
    <Cards src={Audi4} title={"Audi R8 SuperCar"}  Price="60,000"/>



    </div>
    </div>
)


};
export default Audi;
