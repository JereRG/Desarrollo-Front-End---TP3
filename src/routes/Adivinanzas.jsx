import { useState } from "react";
import "../styles/adivinanzas.css";
import toast, { Toaster } from "react-hot-toast";
import { Title } from '../components/title/Title';
import { ButtonInicio } from '../components/buttons/ButtonInicio';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Adivinanzas = () => {
    const [difficulty, setDifficulty] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const startGame = (level) => {
        setDifficulty(level);
        let max;
        if (level === 'easy') max = 20;
        else if (level === 'medium') max = 50;
        else if (level === 'hard') max = 100;
        setRandomNumber(getRandomNumber(1, max));
        setGuess('');
        setMessage('');
        setAttempts(0);
        toast.info(`Juego iniciado en modo ${level}`);
    };

    const handleChange = (e) => {
        setGuess(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userGuess = parseInt(guess);
        if (isNaN(userGuess)) {
            toast.error("Recuerda ingresar un número válido");
            return;
        }

        setAttempts(attempts + 1);

        if (userGuess === randomNumber) {
            setMessage(`¡Correcto! Adivinaste el número en ${attempts + 1} intentos. ✅`);
        } else if (userGuess < randomNumber) {
            setMessage("El número es demasiado bajo ⬇️.");
        } else {
            setMessage("El número es demasiado alto ⬆️.");
        }
    };

    const handleRestart = () => {
        setRandomNumber(null);
        setDifficulty('');
        setGuess('');
        setMessage('');
        setAttempts(0);
        toast.success("Se ha reiniciado el juego. 🔁");
    };

    return (
        <>
            <ButtonInicio />
            <Title title="Adivinanzas de Numero" />
            <div className="guess-number-container">
                <Toaster position="bottom-left" />
                {!difficulty ? (
                    <div className="difficulty-selection">
                        <h2 className="title__adivinanzas">Selecciona la Dificultad 🔢</h2>
                        <button onClick={() => startGame('easy')} className="difficulty-button-green">Fácil (1-20) ✅</button>
                        <button onClick={() => startGame('medium')} className="difficulty-button-yellow">Media (1-50) ⚠️</button>
                        <button onClick={() => startGame('hard')} className="difficulty-button-red">Difícil (1-100) ❌</button>
                    </div>
                ) : (
                    <div className="game-container">
                        <form onSubmit={handleSubmit} className="guess-form">
                        <div className="form-control">
                            <input
                                type="text"
                                value={guess}
                                onChange={handleChange}
                                placeholder="Ingresa el número a adivinar"
                                className="input"
                            />
                            <span className="input-border input-border-alt"></span>
                        </div>

                            <button type="submit" className="restart-button">Adivinar 🤔</button>
                        </form>
                        {message && <p className="message">{message}</p>}
                        <button onClick={handleRestart} className="restart-button">Reiniciar Juego 🔄</button>
                    </div>
                )}
            </div>
        </>
    );
};
