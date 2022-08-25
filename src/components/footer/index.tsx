import { useNavigate } from "react-router-dom";
import { useDraw } from "../../state/hook/useDraw";
import { useParticipants } from "../../state/hook/useParticipants";

const Footer = () => {
    const participants: string[] = useParticipants()

    const navigate = useNavigate()
    const draw = useDraw()
    
    const redirect=()=>{
        draw()
        navigate('/draw')
    }
    return <button disabled={participants?.length < 3} onClick={redirect}>Draw</button>
}
export default Footer