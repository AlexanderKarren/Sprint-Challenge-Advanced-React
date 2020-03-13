import React from "react";
import { render } from "@testing-library/react";
import PlayerList from "./PlayerList";

test("PlayerList displaying error message when API call doesn't happen", () => {
    const { getByText } = render(<PlayerList />);
    getByText(/could not fetch data/i);
});