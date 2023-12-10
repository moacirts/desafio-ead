import Capitulo from "@/data/model/Capitulo"
import { createContext, useState } from "react"
import capitulosFake from "@/data/constants/capitulos"
import Aula from "@/data/model/Aula"
import CursoEstatisticas from "@/data/model/CursoEstatisticas"

interface CursoContextProps {
    capitulos: Capitulo[]
    aulaAtual: Aula
    qtdDeAulas: number
    aulasConcluidas: number
    duracaoTotal: number
    tempoAssistido: number
    setAula: (aula: Aula) => void
    alternarConclusaoDaAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoContextProps>({} as any)

export function CursoProvider(props: any) {

    const [capitulos, setCapitulos] = useState(capitulosFake)
    const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[5])

    const cursoEstatisticas = new CursoEstatisticas(capitulos)

    function alternarConclusaoDaAula(aulaSelecionada: Aula) {
        const novosCapitulos = capitulos.map((capitulo) => {
            const novasAulas = capitulo.aulas.map((aula) => {
                return aula.ordem === aulaSelecionada.ordem
                    ? { ...aula, concluida: !(aula.concluida ?? false) }
                    : aula
            })
            return { ...capitulo, aulas: novasAulas }
        })
        setCapitulos(novosCapitulos)
    }

    function setAula(aula: Aula) {
        setAulaAtual(aula)
    }

    return (
        <CursoContext.Provider
            value={{
                capitulos,
                aulaAtual,
                setAula,
                alternarConclusaoDaAula,
                get qtdDeAulas() { return cursoEstatisticas.qtdDeAulas() },
                get aulasConcluidas() { return cursoEstatisticas.aulasConcluidas() },
                get duracaoTotal() { return cursoEstatisticas.duracaoTotal() },
                get tempoAssistido() { return cursoEstatisticas.tempoAssistido() }
            }}
        >
            {props.children}
        </CursoContext.Provider>
    )
}

export default CursoContext