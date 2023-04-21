import {React, useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import EscolaresCarousel from "./EscolaresCarousel";

function ChacraAbiertaPage(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return(
        <div className="todoChacraAbierta">
            <div className='contenedorChacraAbierta' data-aos="fade-up">
                <div className='contenedorTextoChacraAbierta' data-aos="fade-right">
                    <h3 className='tituloChacraAbierta'>Nuestra historia</h3>
                    <p className='pChacraAbierta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim corporis et provident praesentium? Unde esse officiis, sunt eum ipsa nulla sit nisi enim aspernatur, eos consectetur assumenda! Quae, beatae.</p>
                </div>
           
            <div className='carouselChacraAbierta' data-aos="fade-left">
                <EscolaresCarousel/>
            </div>
            </div>

            <div className="contenedorDiferencia" data-aos="fade-right">
                <h3 className="h3Diferencia" data-aos="fade-down">¿Cual es la diferencia entre Chacra Abierta y Cafetería de Campo?</h3>
                <p className="pDiferencia" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis voluptatum eligendi hic cum dolores similique! Asperiores eveniet sit veritatis temporibus voluptatum odio ad fugiat expedita, at dolore incidunt excepturi!</p>
            </div>
            <div className="productosChacraAbierta" data-aos="fade-up">
                <div className="textoProductosChacraAbierta">
                    <h3 className="h3Productos">Productos que podes encontrar</h3>
                    <p className="pProductos">orem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, unde ratione. Deserunt a est eos omnis harum quos magni eaque nesciunt alias, perspiciatis quia quod molestiae nisi repellendus in voluptates.</p>
                </div>
            <div className="carouselProductosChacraAbierta">
                <EscolaresCarousel/>
            </div>
            </div>
            
        </div>
    )
}

export default ChacraAbiertaPage;