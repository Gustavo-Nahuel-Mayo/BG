import Excursiones1 from '../img/excursiones/Excursiones1.JPG';
import Excursiones5 from '../img/excursiones/Excursiones5.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Bebidas from './Bebidas';
import EscolaresCarousel from './EscolaresCarousel';
import EscolaresCarousel1 from './EscolaresCarousel1';





function ExcursionesPage(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return(

        <div className="contenedorExcursiones" data-aos="fade-up">
            <div id='div1' data-aos="fade-right">
                {/* <img id="imagenExcursiones" src={Excursiones5} alt="" loading='lazy'/> */}
                <EscolaresCarousel1 />
                <div className='excursiones-texto-contenedor'>
                    <h2 className='excursiones-titulo' data-aos="fade-left">
                      Excursiones guiadas
                    </h2>
                    <p className='excursiones-p' data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem illum porro facere exercitationem consequuntur? Rerum, maxime voluptatibus neque omnis at obcaecati, atque culpa saepe nam quod aut ratione necessitatibus sunt!
                    </p>
                </div>
            </div>
                <div id='div2' data-aos="fade-left">
                    <div className='excursiones-texto-contenedor'>
                        <h2 className='excursiones-titulo' data-aos="fade-right">
                        Excursiones guiadas y educativas
                        </h2>
                        <p className='excursiones-p' data-aos="fade-right">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem illum porro facere exercitationem consequuntur? Rerum, maxime voluptatibus neque omnis at obcaecati, atque culpa saepe nam quod aut ratione necessitatibus sunt!
                        </p>
                    </div>
                    <EscolaresCarousel/>
                    {/* <img id="imagenExcursiones2" src={Excursiones1} alt="" loading='lazy'/> */}
                </div>
            </div>
    )
}

export default ExcursionesPage;

