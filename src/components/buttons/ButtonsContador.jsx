import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./buttonscontador.css"

export const ButtonsContador = ({ incrementarContador, decrementarContador }) => {
    return (
        <>
            <button className='plusButton' onClick={decrementarContador}>
                    <RemoveIcon className='plusIcon' />
            </button>
            <button className='plusButton'>
                    <AddIcon className='plusIcon' onClick={incrementarContador} />
            </button>
        </>
    )
    
}

ButtonsContador.propTypes = {
    incrementarContador: PropTypes.func.isRequired,
    decrementarContador: PropTypes.func.isRequired
};
