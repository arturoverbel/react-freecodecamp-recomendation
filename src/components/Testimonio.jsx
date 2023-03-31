import '../css/Testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../images/testimonio-${props.imagen}.png`)}
                alt={`Foto de ${props.name}`}
            />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.name}</strong> in {props.country}
                </p>
                <p className='cargo-testimonio'>
                    {props.charge} at  <strong>{props.company}</strong>
                </p>
                <p className='texto-testimonio'>"{props.testimony}"</p>
            </div>
        </div>
    )
}

export default Testimonio