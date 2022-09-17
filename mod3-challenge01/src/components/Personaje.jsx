const Personaje = ({ image, name, setBackgroundImage }) => {
    return (
      <button
        className='color-square'
        style={{ backgroundImage: image }}
        onClick={() => setBackgroundImage(image)}
      >
        <h2>{name}</h2>
      </button>
    )
  }
  export default Personaje;