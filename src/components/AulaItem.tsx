import Aula from "@/data/model/Aula"
import AulaConclusao from "./AulaConclusao"
import Duracao from "@/utils/Duracao"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"

interface AulaItemProps {
    aula: Aula
    selecionada: boolean
}
export default function AulaItem(props: AulaItemProps) {
    const { aula, selecionada } = props
    const { setAula, alternarConclusaoDaAula } = useContext(CursoContext)
    return (
        <div className="flex items-start gap-2">
            <AulaConclusao
                concluida={aula.concluida ?? false}
                fnClick={() => alternarConclusaoDaAula(aula)}
            />
            <div
                onClick={() => setAula(aula)}
                className={`
                    flex-1 flex justify-between items-center 
                    cursor-pointer
                    ${selecionada && 'text-yellow-400'}
                    hover:text-yellow-600
                `}
            >
                <div className="flex flex-col">
                    <span>
                        {aula.ordem}. {aula.titulo}
                    </span>
                    <span className="text-xs text-zinc-400 -mt-1">Duração de {Duracao.duracaoDe(aula.duracao)}</span>
                </div>
                <IconVideo size={20} className="text-zinc-500" />
            </div>
        </div>
    )
}