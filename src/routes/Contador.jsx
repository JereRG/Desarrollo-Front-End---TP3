import { useState } from "react"
import { Title } from "../components/title/Title"
import { ButtonInicio } from "../components/buttons/ButtonInicio"
import "../styles/contador.css"
import { ButtonsContador } from "../components/buttons/ButtonsContador"
import toast, { Toaster } from "react-hot-toast"

export const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
        if(contador === 9) {
            toast.success("Muy bien llegaste al numero 10")
        }
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }

        if (contador === 0) {
            toast.error("No puedes disminuir más, el contador ya está en cero")
        }
    };

    return (
        <>
            <ButtonInicio />
            <Title title="Contador" />
            <div className="contador-container">
                <div className="one-div">
                    <div className="text">Contador: {contador}</div>
                    <div className="contentContador">
                        <ButtonsContador 
                            incrementarContador={incrementarContador} 
                            decrementarContador={decrementarContador} 
                        />
                    </div>
                </div>
            </div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </>
    );
};