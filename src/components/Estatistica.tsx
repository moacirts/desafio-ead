interface EstatisticaProps {
    label: string
    value: number | string
}
export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className=" flex flex-col justify-center items-center"
        >
            <span className="text-3xl font-black ">{props.value}</span>
            <span className="text-zinc-400">{props.label}</span>
        </div>
    )
}