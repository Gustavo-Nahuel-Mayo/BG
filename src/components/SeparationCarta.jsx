import Imagen from '../img/CafeteriaGrande.png'

function SeparationCarta(){
    return(
            <div className="separation" id='separatione'>
                <img id="separador" src={Imagen} alt="" loading='lazy'/>
                <h2 id="separadorh2">Carta</h2>
                <button className='button-chacra'>
                        <a className='linkChacra' href='/Carta'>
                        Leer más
                        </a>
                </button>

            </div>


    )
}

export default SeparationCarta;