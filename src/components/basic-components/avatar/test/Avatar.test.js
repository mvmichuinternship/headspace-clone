import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Avatar from "../Avatar";

afterEach(() => {
    cleanup(); 
})

describe("avatar Component", () => {
    render(<Avatar  />);
    const avatar = screen.getByTestId("avatar");

    test("avatar Rendering", () => {
        expect(avatar).toBeInTheDocument();
    })

    
})
