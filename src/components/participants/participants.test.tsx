import { render,screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Participants from '.'
import { useParticipants } from '../../state/hook/useParticipants'
jest.mock('../../state/hook/useParticipants',()=>{
    return {useParticipants:jest.fn()}
})
describe('empty list', () => {
    beforeEach(()=>{
        (useParticipants as jest.Mock).mockReturnValue([])
    })
    test('should rended',()=>{
        render(<RecoilRoot>
            <Participants />
        </RecoilRoot>)
        const items=screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })
})
describe('list with values', () => {
    const participants = ['Ana','Catarina']
    beforeEach(()=>{
        (useParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('should rended',()=>{
        render(<RecoilRoot>
            <Participants />
        </RecoilRoot>)
        const items=screen.queryAllByRole('listitem')
        expect(items).toHaveLength(2)
    })
})