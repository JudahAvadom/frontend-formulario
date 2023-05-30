import Formulario from "./components/Formulario"
import Lista from "./components/Lista"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Formulario />
        <Lista />
      </div>
    </>
  )
}

export default App
