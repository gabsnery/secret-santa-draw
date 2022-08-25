import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipants } from '../../state/hook/useParticipants'
import { runDraw } from "./runDraw";

describe('on draw participans', () => {

    test("each participant should not draw own name", () => {
        const participants = ['Ana',
            'Catarina',
            'Jorel',
            'Irmão do Jorel',
            'Vinicius']
        const draw = runDraw(participants)
        participants.forEach(participant => {
            const santaSecret = draw.get(participant)
            expect(santaSecret).not.toEqual(participant)
        })

    })
})