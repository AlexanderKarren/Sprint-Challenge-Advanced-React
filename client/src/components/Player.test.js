import React from "react";
import { render } from "@testing-library/react";
import Player from "./Player";

test("Properly rendering card", () => {
    const { getByText } = render(<Player player={{
        name: "Jane Doe",
        searches: 100,
        country: "Seychelles"
    }}/>);
    getByText(/jane doe/i);
    getByText(/seychelles/i);
    getByText(/100/i);
});