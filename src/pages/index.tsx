import Sala from "@/components/Sala";
import { CursoProvider } from "@/context/CursoContext";

export default function Home() {
  return (
    <CursoProvider>
      <Sala/>
    </CursoProvider>
  )
}
