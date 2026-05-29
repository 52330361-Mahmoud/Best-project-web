import email from "../assets/Email icon1.png";
import face from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import "../Components/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        
   <div>
    
         <img src={email} alt="error" />
       <p>MohdSaleh102@gmail.com</p>
   </div>
       <div>
        <img src={face} alt="error" />
       </div>
       <div>
        <img src={instagram} alt="error" />
       </div>
      
      </div>
    </footer>
  )
};

export default Footer;



