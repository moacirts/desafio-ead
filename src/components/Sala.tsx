import Estatisticas from "./Estatisticas";
import Menu from "./Menu";
import Player from "./Player";

export default function Sala() {
    return (
        <div>
            <div className="flex">
                <Menu />
                <div className="flex flex-1 flex-col justify-center items-center gap-5">
                    <Estatisticas />
                    <Player />
                </div>
            </div>
        </div>
    )
}