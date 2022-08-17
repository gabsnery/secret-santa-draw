import React, { useState, useRef } from "react";
import { useErrorMessage } from "../../state/hook/useErrorMessage";
import { usePartipantAdd } from "../../state/hook/usePartipantAdd";

const Form = () => {
    const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const add = usePartipantAdd()
    const errorMessage = useErrorMessage()
    const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        add(name)
        setName('')
        inputRef?.current?.focus()
    }
    return <form onSubmit={addParticipant}>
        <input type="text"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Participant`s name" />
        <button disabled={name === ''} type='submit'>add</button>
        {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
}
export default Form