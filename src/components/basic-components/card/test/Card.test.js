import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Card from "../Card";

afterEach(() => {
    cleanup(); 
})

describe("card Component", () => {
    render(<Card cardType="explore" />);
    const card = screen.getByTestId("card");

    test("card Rendering", () => {
        expect(card).toBeInTheDocument();
    })

    
})
