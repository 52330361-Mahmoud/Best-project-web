import Cards from "../Components/Cards";
import BMW1 from "../assets/Bmw w3.webp";
import BMW2 from "../assets/Bmw w4.jpg";

import BMW3 from "../assets/Bmw w5.jpg";
import BMW4 from "../assets/Bmw w6.jpg";
import"./BMW.css";

function BMW(){




return(


<div className="BMW-page">
    <h2 className="page-title">BMW  احدث  سيارات </h2>




<div className="cards">
    <div className="card-box">
   
    <Cards src={BMW1} title={"BMW M3 Coupe"}  Price=" 62,000    "/>
   


    <Cards src={BMW2} title={"BMW x5 M-Sport"}  Price="  75,000   "/>



    <Cards src={BMW3} title={"BMW i7 Electric"}  Price=" 98,000    "/>


    <Cards src={BMW4} title={"BMW M8 Competition"}  Price=" 130,000    "/>
    </div>









</div>
</div>





)
};
export default BMW;