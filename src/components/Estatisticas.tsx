import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";
import Duracao from "@/utils/Duracao";

export default function Estatisticas() {
    const { qtdDeAulas, aulasConcluidas, duracaoTotal, tempoAssistido } = useContext(CursoContext)

    const percentualAssitido = Math.round(100 * tempoAssistido / duracaoTotal)

    return (
        <div className="flex w-4/5 h-24 bg-zinc-700 rounded-md justify-around">
            <Estatistica label="Qtd. Aulas" value={qtdDeAulas} />
            <Estatistica label="Aulas Concluídas" value={aulasConcluidas} />
            <Estatistica label="Duração Total" value={Duracao.duracaoDe(duracaoTotal)} />
            <Estatistica label="Tempo Assistido" value={Duracao.duracaoDe(tempoAssistido)} />
            <Estatistica label="Perc. Conclusão" value={`${percentualAssitido}%`} />
        </div>
    )
}