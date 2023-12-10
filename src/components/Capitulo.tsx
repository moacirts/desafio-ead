import Capitulo from "@/data/model/Capitulo";
import AulaItem from "./AulaItem";
import { useContext, useState } from "react";
import CursoContext from "@/context/CursoContext";

interface CapituloProps {
    capitulo: Capitulo
}

export default function Capitulo(props: CapituloProps) {
    const { capitulo } = props
    const { aulaAtual } = useContext(CursoContext)
    const [mostraAulas, setMostraAulas] = useState(false)

    const toggleMostraAulas = function () {
        setMostraAulas(!mostraAulas)
        console.log(mostraAulas)
    }

    return (
        <div>
            <div
                className="flex items-center gap-2 p-4 bg-zinc-900 cursor-pointer"
                onClick={() => toggleMostraAulas()}
            >
                <div className="flex w-8 h-8 justify-center items-center 
                    bg-black rounded-full border border-zinc-400
                    "
                >
                    {capitulo.ordem}
                </div>
                <span>{capitulo.titulo}</span>
            </div>
            <div
                className={`
                    grid 
                    ${mostraAulas ? 'gridTemplateRows1fr' : 'gridTemplateRows0fr'}
                    transition-grid-template-rows duration-500 ease-in-out
                `}
            >
                <div
                    className={`
                        overflow-hidden flex flex-col gap-2 
                        transition-padding duration-500 ease-in-out
                        ${mostraAulas ? 'p-4' : 'p-0'}
                    `}>
                    {capitulo.aulas.map(aula => {
                        return (
                            <AulaItem
                                key={aula.ordem}
                                aula={aula}
                                selecionada={aula.ordem === aulaAtual.ordem}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}