import Banner from '../img/CafeteriaGrande.png';
import Logo from '../img/Onlylogo.png';

function Navbar(){
    return(
        <div className="hero">
            <img id="navbarimg" src={Banner} alt="" loading='lazy'/>
            <img id="onlylogo" src={Logo} alt="" loading='lazy'/>
        </div>

    )
}


export default Navbar;