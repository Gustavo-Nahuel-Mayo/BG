import Imagen from '../img/CafeteriaGrande.png';

function SeparadorExcursiones(){
    return(
            <div className="separationex" id='separationex'>
                <img id="separadorex" src={Imagen} alt="" loading='lazy'/>
                <h2 id="separadorexh2">Excursiones</h2>
                <button className='button-chacra'>
                        <a className='linkChacra' href='/Excursiones'>
                        Leer más
                        </a>
                </button>

            </div>


    )
}

export default SeparadorExcursiones;