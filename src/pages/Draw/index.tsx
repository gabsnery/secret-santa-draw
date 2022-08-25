import React, { useState } from "react";
import { useParticipants } from "../../state/hook/useParticipants";
import { useParticipantsDrawd } from "../../state/hook/useParticipantsDrawd";

const Draw = () => {

    const participants: string[] = useParticipants()
    const drawParticipants= useParticipantsDrawd()
    const [currentUser, setCurrentUser] = useState('')
    const [secretSanta, setSecretSanta] = useState('')

    const draw =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(drawParticipants.has(currentUser))
        setSecretSanta(drawParticipants.get(currentUser)??'')
    }
    return (
        <section>
            <form onSubmit={draw}>
                <select required 
                name='currentParticipant' 
                onChange={e=>setCurrentUser(e.target.value)}
                id='currentParticipant' 
                placeholder="Who are you?" 
                value={currentUser}>
                    <option key='0'>Select your name</option>
                    {participants.map(it => <option key={it}>{it}</option>)}
                </select>
                <button type="submit">Draw</button>
            </form>
            {<p role="alert">{secretSanta}</p>}
        </section>
    );
}
export default Draw;