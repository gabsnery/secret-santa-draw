import { runDraw } from './../helpers/runDraw';
import { useSetRecoilState } from "recoil";
import { useParticipants } from "../../state/hook/useParticipants";
import { santaSecretResultState } from "../atom";

export const useDraw = () => {
    const participants: string[] = useParticipants()
    const setResult = useSetRecoilState(santaSecretResultState)
    return () => {
        const result=runDraw(participants)
        setResult(result)
    }
}
