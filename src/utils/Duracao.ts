export default class Duracao {
    static duracaoDe(segundos: number): string {

        const hor = Math.floor(segundos / 3600)

        const min = Math.floor((segundos % 3600) / 60)
        const seg = ((segundos % 3600) % 60)

        let duracaoTotal = hor > 0 ? `${hor}h ` : ''
        duracaoTotal += min > 0 ? `${min}m ` : ''
        duracaoTotal += seg > 0 ? `${seg}s` : ''

        if (segundos == 0) {
            duracaoTotal = '0'
        }

        return duracaoTotal
    }
}