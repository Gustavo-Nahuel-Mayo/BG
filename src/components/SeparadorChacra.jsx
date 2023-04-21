import Imagen from '../img/chacra-abierta.png'

function SeparadorChacra(){
    return(
            <div className="separationch" id='separationch'>
                    <img id="separadorch" src={Imagen} alt=""/>
                    <h2 id="separadorchh2">Chacra Abierta</h2>
                    <button className='button-chacra'>
                        <a className='linkChacra' href='/Chacra-abierta'>
                        Leer más
                        </a>
                    </button>
                    
            </div>


    )
}

export default SeparadorChacra;