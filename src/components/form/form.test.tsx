import { render, screen } from "@testing-library/react";
import React from "react";
import Form from ".";

test("if input empty, new users cant be added",()=>{
    render(<Form/>)
    //find input
    const input = screen.getByPlaceholderText('Participant`s name');
    //find button
    const button = screen.getByRole('button');
    //guarantee that input exists
    expect(input).toBeInTheDocument()
    //guarantee that  button is disabled
    expect(button).toBeDisabled()
})