const Personaje = ({ name, status, species, image, setPersonajeSeleccionado }) => {
    return (
      <>
      <div className="color-square" onClick={() => {setPersonajeSeleccionado(image)}}>
        <img src={image} alt={name} />
        <p>Nombre: {name}</p>
        <p>Especie: {species}</p>
        <p>Estado: {status}</p>
      </div>
      </>
    )
  }
  export default Personaje;