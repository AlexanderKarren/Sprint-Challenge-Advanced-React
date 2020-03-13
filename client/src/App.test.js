import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test("main heading rendering properly", () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup players/i)
})