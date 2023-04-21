import React, {useState, useEffect} from "react"; 
import { Link, useLocation } from "react-router-dom";
import BurguerButton from "./BurguerButton";
import LogoCafe from "../img/cafe.svg";

function Barra() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    let location = useLocation();
    const activeLink = location.pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    return(
        <>
            <div id="barra">
                <Link to='/'>
                    <img id="barra-logo" src={LogoCafe} alt="" ></img>              
                </Link>
                <div className={`links ${clicked ? 'active' : ''}`}>
                   <Link to={'/Carta'} className={`a ${activeLink === "/Carta" ? "active-link" : ""}`} >Carta</Link>
                   <Link to={'/Conocenos'} className={`a ${activeLink === "/Conocenos" ? "active-link" : ""}`} >Conocenos</Link>
                   <Link to={'/Excursiones'} className={`a ${activeLink === "/Excursiones" ? "active-link" : ""}`}  >Excursiones</Link>
                   <Link to={'/Chacra-abierta'} className={`a ${activeLink === "/Chacra-abierta" ? "active-link" : ""}`} >Chacra Abierta</Link>
                </div>
                <div className="burguer">
                    <BurguerButton clicked={clicked}  handleClick={handleClick}/>
                </div>
                
            </div>

        </>
    )
}

export default Barra;



