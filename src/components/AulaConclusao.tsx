import { IconCheck } from "@tabler/icons-react";

interface AulaConclusaoProps {
    concluida: boolean
    fnClick?: () => void
}
export default function AulaConclusao(props: AulaConclusaoProps) {
    const { concluida, fnClick } = props
    return (
        <button
            className={`
                flex justify-center items-center
                w-6 h-6 rounded-full border border-zinc-400
                ${concluida && 'bg-green-500'}
            `}
            onClick={fnClick}
        >
            {concluida && <IconCheck size={18} stroke={3} />}
        </button>
    )
}