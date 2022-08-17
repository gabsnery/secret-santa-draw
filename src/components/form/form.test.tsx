import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from ".";

describe('Form behavior',()=>{
    test("if input empty, new participant cant be added", () => {
        render(<RecoilRoot>
            <Form />
        </RecoilRoot>)
        //find input
        const input = screen.getByPlaceholderText('Participant`s name');
        //find button
        const button = screen.getByRole('button');
        //guarantee that input exists
        expect(input).toBeInTheDocument()
        //guarantee that  button is disabled
        expect(button).toBeDisabled()
    })
    test("if input is not empty, allow add participant", () => {
    
        render(<RecoilRoot>
            <Form />
        </RecoilRoot>)
        //find input
        const input = screen.getByPlaceholderText('Participant`s name');
        //find button
        const button = screen.getByRole('button');
        //Fill input with participant's name
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        //submit button
        fireEvent.click(button)
        //guarantee that   cursor is back to input
        expect(input).toHaveFocus()
        //guarantee that  input is cleared 
        expect(input).toHaveValue('')
    
    })
    
    test("doesnt allow duplicated names", () => {
        render(<RecoilRoot>
            <Form />
        </RecoilRoot>)
        //find input
        const input = screen.getByPlaceholderText('Participant`s name');
        //find button
        const button = screen.getByRole('button');
        //Fill input with participant's name
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        //submit button
        fireEvent.click(button)
        //Fill input with participant's name
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        //submit button
        fireEvent.click(button)
        const errorMessage = screen.getByRole('alert')
        expect(errorMessage.textContent).toBe("Duplicated names not allowed")
    })
    test("duplicated name error message should to vanish after 3 seconds", () => {
        jest.useFakeTimers()
        render(<RecoilRoot>
            <Form />
        </RecoilRoot>)
        //find input
        const input = screen.getByPlaceholderText('Participant`s name');
        //find button
        const button = screen.getByRole('button');
        //Fill input with participant's name
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        //submit button
        fireEvent.click(button)
        //Fill input with participant's name
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        //submit button
        fireEvent.click(button)
        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage?.textContent).toBe("Duplicated names not allowed")
        act(() => {
            jest.runAllTimers()
        });
        //wait 3 seconds
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })
})