import { BsInstagram } from "react-icons/bs";
import AOS from "aos";
import 'aos/dist/aos.css';


function Footer(){
    return(
        
            <div className="footer" data-aos="fade-down">
                <div className="text-footer">
                    <h2 className="center-div">Encontrarás toda la información de nuestras proximas aventuras en nuestro instagram</h2>
                </div>
                <div class="box__footer" id="Redes">
                    <h2 id="text" className="border1">Seguinos</h2>
                    <h2 id="text" className="wave1">Seguinos</h2>
                </div>
                <div className="icon-instagram">
                    <a className="instagram" rel="noopener noreferrer" href="https://www.instagram.com/chacrabg_doradillo/" target={"_blank"}>
                    <BsInstagram/>
                    </a>
                    
                </div>
                
                
            </div>

    )
}

export default Footer;