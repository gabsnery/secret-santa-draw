import shuffle from "just-shuffle";

export const runDraw=(participants:string[])=>{
    const totalParticipants = participants.length
    const drawnd = shuffle(participants)
    const result = new Map<string, string>()
    for (let index = 0; index < totalParticipants; index++) {
        const santaIndex = index === totalParticipants - 1 ? 0 : index + 1
        result.set(drawnd[index], drawnd[santaIndex])
    }
    return result
}