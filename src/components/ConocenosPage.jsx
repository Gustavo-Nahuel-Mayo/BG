import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ConocenosCarousel from './ConocenosCarousel';
import EscolaresCarousel from './EscolaresCarousel';
import LogoCafe from "../img/cafe.svg";


function ConocenosPage(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return(

        <div className="contenedorConocenos" data-aos="fade-up">
            <div className='conocenosCarousel'>
                <ConocenosCarousel />
            </div>
            <div className='tituloTextoConocenos' data-aos="fade-right">
                <img  src={LogoCafe} alt="" ></img>  
                {/* <h2 className='h2Conocenos'>Conocenos</h2> */}
                {/* <p className='pConocenos'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum consequuntur illo magnam architecto cum temporibus? Dolores ut quaerat ad placeat, unde sequi?</p> */}
            </div>
            <div className='contenedorHistoria' data-aos="fade-up">
                <div className='contenedorTextoHistoria' data-aos="fade-right">
                    <h3 className='tituloHistoria'>Nuestra historia</h3>
                    <p className='pHistoria'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim corporis et provident praesentium? Unde esse officiis, sunt eum ipsa nulla sit nisi enim aspernatur, eos consectetur assumenda! Quae, beatae.</p>
                </div>
                <div className='carouselHistoria' data-aos="fade-left">
                    <EscolaresCarousel/>
                </div>
            </div>
        </div>
    )
}

export default ConocenosPage;