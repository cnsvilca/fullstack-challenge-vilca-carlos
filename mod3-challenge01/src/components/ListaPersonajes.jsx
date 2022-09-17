import { useEffect, useState } from "react";
import { getCharacters } from "../service";
import Personaje from "./Personaje";



const ListaPersonajes = () => {
  const [listaPersonajes, setListaPersonajes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState("")

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setListaPersonajes(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {
        <div>
          <img src={personajeSeleccionado} alt="No se Cargo la imagen"></img>
        </div>
      }
      {isLoading && <h1 className="loading-text">Cargando...</h1>}
      <div>
        {
          listaPersonajes.map(personaje => (
            <Personaje
              key={personaje.id}
              name={personaje.name}
              status={personaje.status}
              image={personaje.image}
              species={personaje.species}
              setPersonajeSeleccionado={setPersonajeSeleccionado} />
          ))
        }
      </div>
    </>
  )
}

export default ListaPersonajes;