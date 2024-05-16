import PropTypes from 'prop-types';
import "./buttoncolores.css"

export const ButtonColores = ({ cambiarColor }) => {
    return (
        <button className="button__color" onClick={cambiarColor}>Cambiar color</button>
    )
}

ButtonColores.proptypes = {
    cambiarColor: PropTypes.func.isRequired,
}


