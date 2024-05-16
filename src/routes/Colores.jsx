import { useState } from "react";
import { Title } from '../components/title/Title';
import { ButtonInicio } from '../components/buttons/ButtonInicio';
import "../styles/colores.css"
import { ButtonColores } from "../components/buttons/ButtonColores"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const Colores = () => {
    const [color, setColor] = useState("#FFFFFF");

    const generarColorAleatorio = () => {
        const letras = "0123456789ABCDEF";
        let nuevoColor = "#";
        for (let i = 0; i < 6; i++) {
            nuevoColor += letras[Math.floor(Math.random() * 16)];
        }
        return nuevoColor;
    };

    const cambiarColor = () => {
        const nuevoColor = generarColorAleatorio();
        setColor(nuevoColor);
    };

    const copiarColor = () => {
        navigator.clipboard.writeText(color);
        toast.success(`El codigo del color: ${color} se copio correctamente `) 
    };

    return (
        <>
            <ButtonInicio />
            <Title title="Colores Aleatorios" />
            <div className="cardColores">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <div>
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: color,
                                margin: "20px auto",
                                borderRadius: "50px",
                                display: "flex",
                                alignItems: "center", 
                                justifyContent: "center", 
                            }}
                        >
                            <button onClick={copiarColor} className="button__copy"> 
                                <ContentCopyIcon fontSize="large" className="icon__copy" />
                            </button>
                        </div>
                        <ButtonColores cambiarColor={cambiarColor} />
                    </div>
                </div>
            </div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </>
    )
}
