import React from "react";
import renderer from "react-test-renderer";
import HomeLayout from "../screens/HomeLayout";
import { MemoryRouter } from "react-router-dom";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<MemoryRouter><HomeLayout /></MemoryRouter>).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});