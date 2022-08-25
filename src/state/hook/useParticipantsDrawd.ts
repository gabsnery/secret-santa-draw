import { useRecoilValue } from "recoil"
import { santaSecretResultState } from "../atom"

export const useParticipantsDrawd = () => {
    return  useRecoilValue(santaSecretResultState)
}