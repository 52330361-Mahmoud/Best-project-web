import Cards from "../Components/Cards"
import Mercedes1 from "../assets/Mercedes w1.png"
import Mercedes2 from "../assets/Mercedes w3.png"
import Mercedes3 from "../assets/Mercedes w5.png"
import Mercedes4 from "../assets/Mercedes w7.png"
import "../pages/Mercedes.css"





function Mercedes(){

return(

<div className="Mercedes-page">
    <p className="page-title">[Mercedes]عالم الفخامه من شركه</p>

    <div className="Mercedes">

 <Cards src={Mercedes1} title={"Mercedes C-Class"}  Price=" 70,000" />
    <Cards src={Mercedes2} title={"Mercedes GLE SUV"}  Price="  90,000" />
    <Cards src={Mercedes3} title={" Mercedes E-Class "}  Price=" 100,000" />
    <Cards src={Mercedes4} title={"Luxury Mercedes"}  Price=" 190,000" />





    </div>
    </div>
)



};
export default Mercedes;