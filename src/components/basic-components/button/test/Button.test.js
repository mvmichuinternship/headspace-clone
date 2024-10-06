import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import IconButton from "../IconButton";

afterEach(() => {
    cleanup(); 
})

describe("Button Component", () => {
    const onClick = jest.fn();
    render(<IconButton onClick={onClick} title={"Icon Button"} />);
    const button = screen.getByTestId("button");

    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

    test("Button Text", () => {
        expect(button).toHaveTextContent("Icon Button");
    })
})
