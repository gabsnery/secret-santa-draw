import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useParticipants } from "../../state/hook/useParticipants";

const mockNavigation=jest.fn();
const mockDraw=jest.fn();

jest.mock('../../state/hook/useParticipants',()=>{
    return {useParticipants:jest.fn()}
})
jest.mock('../../state/hook/useDraw',()=>{
    return {useDraw:()=>mockDraw}
})
jest.mock('react-router-dom',()=>{
    return {useNavigate:()=>mockNavigation}
})
describe('Not enough participants',()=>{
    const participants = ['Ana','Catarina']
    beforeEach(()=>{
        (useParticipants as jest.Mock).mockReturnValue(participants)
    })
    test("Button should be disables", () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        //find input
        const button = screen.getByRole('button');
        expect(button).toBeDisabled()
    })
})
describe('Enough participants',()=>{
    const participants = ['Ana','Catarina','Jorel','Irmão do Jorel']
    beforeEach(()=>{
        (useParticipants as jest.Mock).mockReturnValue(participants)
    })
    test("Button should be enabled", () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        //find input
        const button = screen.getByRole('button');
        expect(button).toBeEnabled()
    })
    test("should redirect", () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        //find input
        const button = screen.getByRole('button');
        fireEvent.click(button)
        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/draw')
        expect(mockDraw).toHaveBeenCalledTimes(1)
    })
})