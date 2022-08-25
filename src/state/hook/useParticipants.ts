import { useRecoilValue } from "recoil"
import { participantsListState } from "../atom"

export const useParticipants = () => {
    return  useRecoilValue(participantsListState)
}