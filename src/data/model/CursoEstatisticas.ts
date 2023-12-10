import Capitulo from "./Capitulo";

export default class CursoEstatisticas {
    constructor(private capitulos: Capitulo[]) { }

    qtdDeAulas() {
        return this.capitulos.reduce((qtd, cap) => qtd + cap.aulas.length, 0)
    }

    // aulasConcluidas() {
    //     return this.capitulos.reduce((qtd, cap) => { 
    //         return qtd + cap.aulas.reduce((aulasConc, aula)=>{
    //             return aulasConc + (aula.concluida ?? false ? 1 : 0)
    //         }, 0)
    //     }, 0)
    // }
    aulasConcluidas() {
        return this.capitulos.reduce((qtd, cap) => {
            return qtd + cap.aulas.filter(aula => aula.concluida).length
        }, 0)
    }

    duracaoTotal() {
        return this.capitulos.reduce((duracaoTotal, cap) => {
            return duracaoTotal + cap.aulas.reduce((aulasDuracao, aula) => {
                return aulasDuracao + aula.duracao
            }, 0)
        }, 0)
    }

    // tempoAssistido() {
    //     return this.capitulos.reduce((duracaoTotal, cap) => {
    //         return duracaoTotal + cap.aulas.reduce((aulasAssistidas, aula) => {
    //             return aulasAssistidas + (aula.concluida ?? false ? aula.duracao : 0)
    //         }, 0)
    //     }, 0)
    // }

    tempoAssistido() {
        return this.capitulos.reduce((duracaoTotal, cap) => {
            return duracaoTotal + cap.aulas.filter(aula => aula.concluida).reduce((aulasAssistidas, aula) => {
                return aulasAssistidas + aula.duracao
            }, 0)
        }, 0)
    }

}