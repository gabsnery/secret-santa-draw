import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, participantsListState } from "../atom"

export const usePartipantAdd = () => {
    const setList = useSetRecoilState(participantsListState)
    const currentList = useRecoilValue(participantsListState)
    const setError = useSetRecoilState(errorState)
    return (participantName: string) => {
        if (currentList.includes(participantName)) {
            setError('Duplicated names not allowed')
            setTimeout(()=>{
                setError("")
            },3000)
            return
        }
        return setList(currentList => [...currentList, participantName])
    }
}