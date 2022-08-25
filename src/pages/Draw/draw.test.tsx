import { fireEvent, render,screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Draw from ".";
import { useParticipants } from '../../state/hook/useParticipants'
import { useParticipantsDrawd } from "../../state/hook/useParticipantsDrawd";
const mockNavigation=jest.fn();
jest.mock('../../state/hook/useParticipants',()=>{
    return {useParticipants:jest.fn()}
})
jest.mock('../../state/hook/useParticipantsDrawd',()=>{
    return {useParticipantsDrawd:jest.fn()}
})
jest.mock('react-router-dom',()=>{
    return {useNavigate:()=>mockNavigation}
})
describe('on draw page', () => {
    const participants = ['Ana','Catarina','Jorel','Irmão do Jorel']
    const result= new Map([
        ['Ana','Catarina'],
        ['Catarina','Jorel'],
        ['Jorel','Irmão do Jorel'],
        ['Irmão do Jorel','weird lady'],
        ['weird lady','Ana'],
    ])
    beforeEach(()=>{
        (useParticipants as jest.Mock).mockReturnValue(participants);
        (useParticipantsDrawd as jest.Mock).mockReturnValue(result)
    })
    test("all participants should be able to check their secret santa", () => {
        render(<RecoilRoot>
            <Draw />
        </RecoilRoot>)
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length+1)
    })
    test('secret santa is show when requested',()=>{
        render(<RecoilRoot>
            <Draw />
        </RecoilRoot>)
        const select = screen.getByPlaceholderText('Who are you?')
        fireEvent.change(select,{targer:{value:'Catarina'}})
        const button=screen.getByRole('button')
        fireEvent.click(button)
        const santaSecret=screen.queryByRole('alert')
        expect(santaSecret).toBeInTheDocument()
    })
})