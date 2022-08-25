import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Home from ".";
const mockNavigation=jest.fn();

jest.mock('react-router-dom',()=>{
    return {useNavigate:()=>mockNavigation}
})
describe('home page', () => {
    test("shoudl render", () => {
        const { container } = render(<RecoilRoot>
            <Home />
        </RecoilRoot>)
        expect(container).toMatchSnapshot()
    })
})