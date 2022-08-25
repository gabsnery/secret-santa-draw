import { useParticipants } from "../../state/hook/useParticipants";

const Participants = () => {
const participants:string[]=useParticipants()
    return <ul>
        {participants.map(it=><li key={it}>{it}</li>)}
    </ul>
}
export default Participants