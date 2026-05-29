import Ferrari1 from "../assets/Ferrari w1.avif"
import Ferrari2 from "../assets/Ferrari2.png"
import Ferrari3 from "../assets/Ferrari3.png"
import Ferrari4 from "../assets/Ferrari4.png"
import Cards from "../Components/Cards"
import"./Ferrari.css";
function Ferrari(){




    return(


        <div className="Ferrari-page">
            <p className="page-title1">   الفاخره [Ferrari]  نخبه   </p>


<div className="Ferrari">





    <Cards src={Ferrari1} title={"Ferrari Roma"}  Price=" 62,000 "/>
    <Cards src={Ferrari2} title={"Ferrari portoFina"}  Price="75,000"/>
    <Cards src={Ferrari3} title={"Ferrari 296 GTB"}  Price=" 98,000 "/>
    <Cards src={Ferrari4} title={"Ferrari SF90 "}  Price=" 130,000 "/>









</div>



        </div>
    )
};
export default Ferrari;