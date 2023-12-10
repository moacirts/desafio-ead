
import { useContext } from "react"
import Capitulo from "./Capitulo"
import CursoContext from "@/context/CursoContext"

export default function Menu() {
    const { capitulos } = useContext(CursoContext)
    return (
        <div className="
                    flex flex-col bg-zinc-800
                    w-96 h-screen overflow-auto
                "
        >
            {capitulos.map(capitulo => {
                return <Capitulo key={capitulo.id} capitulo={capitulo} />
            })}
        </div>
    )
}