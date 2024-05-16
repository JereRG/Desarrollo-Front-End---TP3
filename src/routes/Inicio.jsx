import { Title } from "../components/title/Title";
import { ButtonInicio } from "../components/buttons/ButtonInicio";
import "../styles/inicio.css";

export const Inicio = () => {
  return (
    <>
    <ButtonInicio />
    <Title title="Trabajo Practico Frontend N3" />
    <div className="inicio-container">
      <div className="cards-row">
        <div className="feature-card">
          <h3>Info Personal</h3>
          <p>Una tarjeta con información personal.</p>
        </div>
        <div className="feature-card">
          <h3>Contador</h3>
          <p>Un contador que puedes incrementar o decrementar.</p>
        </div>
        <div className="feature-card">
          <h3>Generador de Colores</h3>
          <p>Genera colores aleatorios con un clic.</p>
        </div>
      </div>
      <div className="cards-row">
        <div className="feature-card">
          <h3>Generador de Emojis</h3>
          <p>Muestra un emoji aleatorio con un clic.</p>
        </div>
        <div className="feature-card">
          <h3>Adivinanza de Números</h3>
          <p>Intenta adivinar un número aleatorio.</p>
        </div>
      </div>
    </div>
    </>
  );
};
