import { Routes, Route} from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Inicio } from "./routes/Inicio"
import { InfoPersonal } from "./routes/InfoPersonal"
import { Contador } from "./routes/Contador"
import { Colores } from "./routes/Colores"
import { Emojis } from "./routes/Emojis"
import { Adivinanzas } from "./routes/Adivinanzas"


export const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/info-personal" element={<InfoPersonal />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/colores" element={<Colores />} />
          <Route path="/emojis" element={<Emojis />} />
          <Route path="/adivinanzas" element={<Adivinanzas />} />
        </Routes>
      </div>
    </div>
  )
}

