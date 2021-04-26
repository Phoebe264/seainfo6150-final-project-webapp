import React from "react";
import AboutUS from "./AboutUS";

describe("AboutUS tests", () => {
    it("renders correctly", () => {

        const { container } = render(<AboutUS/>);
        expect(container).toMatchSnapshot();
    });
});