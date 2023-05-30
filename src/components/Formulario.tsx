import axios from "axios"
import { useEffect, useState } from "react"

const Formulario = () => {
    const [paises, setPaises] = useState()

    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [pais, setPais] = useState()

    const classInput = "outline-none border-2 border-gray-600 p-1 m-1 rounded-lg"
    const getPaises = async () => {
        const { data } = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")

        // Ordenar lista de paises
        data.sort(function(a : any, b : any) {
            if (a.name.common < b.name.common) {
                return -1;
            }
            if (a.name.common > b.name.common) {
                return 1;
            }
            return 0;
        });
        setPaises(data)
    }
    useEffect(() => {
        getPaises()
    }, [])
    const handleClick = async()=>{
        if (!pais || !nombre || !apellido) {
            alert("Rellene todos los campos")
        }
        else {
            axios.post("http://localhost:4000/usuario", {
                nombre,
                apellido,
                pais
            })
            window.location.href="/"
        }
    }
    return !paises ? <>Cargando...</> : (
        <div className="p-4">
            <form className="flex flex-col">
                <input 
                    type="text"
                    value={nombre}
                    // @ts-ignore
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre" 
                    className={classInput} 
                />
                <input 
                    type="text"
                    value={apellido}
                    placeholder="Apellido" 
                    // @ts-ignore
                    onChange={(e) => setApellido(e.target.value)}
                    className={classInput} 
                />
                <select 
                    className="outline-none border-2 border-gray-600 p-1 m-1 rounded-lg"
                    value={pais}
                    // @ts-ignore
                    onChange={(e) => setPais(e.target.value)}
                >
                    <option value="">PAIS</option>
                    {
                        // @ts-ignore
                        paises.map((e: any, key: any) => (
                            <option 
                                key={key} 
                                value={e.name.common}
                            >
                                {e.name.common}
                            </option>
                        ))
                    }
                </select>
                <button onClick={handleClick} type="button" className="bg-green-600 p-2 m-1 rounded-xl text-white">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default Formulario