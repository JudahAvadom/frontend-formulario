import { useEffect, useState } from "react"
import axios from 'axios'
const api = import.meta.env.VITE_API

const Lista = () => {
    const [user, setUsers] = useState()
    const getUser = async () => {
        const rs = await axios.get(`${api}/lista`)
        setUsers(rs.data)
        console.log(user);
    }
    useEffect(() => {
        getUser()
    }, [])
    return !user ? <></> : (
        <div className="p-4">
            <table>
                <thead>
                    <tr>
                        <td className="text-xl font-semibold px-1">ID</td>
                        <td className="text-xl font-semibold px-1">Nombre</td>
                        <td className="text-xl font-semibold px-1">Apellido</td>
                        <td className="text-xl font-semibold px-1">Pais</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        // @ts-ignore
                        user.map((e: any, key: any) => (
                            <tr key={key}>
                                <td className="px-1">{e.usuario_id}</td>
                                <td className="px-1">{e.nombre}</td>
                                <td className="px-1">{e.apellido}</td>
                                <td className="px-1">{e.pais}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Lista