import { useState } from "react";
import { getCharacters } from "../service";
import Personaje from "./Personaje";



const ListaPersonajes = () => {
    const [backgroundImage, setBackgroundImage] = useState('')
    const [charList, setCharList ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const lista = getCharacters()
      return (
        <>
        
    
          <div className='page' style={{ backgroundImage }}>
            {
              lista.map(personaje => (
                <Personaje
                  key={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  image={personaje.image}
                  species={personaje.species}
                  setBackgroundImage={setBackgroundImage} />
              ))
            }
          </div>
        </>
      )
}

export default ListaPersonajes;