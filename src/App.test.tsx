import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

// jest.mock("./service", () => ({
//   __esModule: true, // this property makes it work
//   default: () => [1, 2, 3, 1, 2, 3],
// }));

// eslint-disable-next-line import/first
import App from "./App";

describe("App.tsx", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // clears the cache
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  test("Should have expected number of cards", () => {
    process.env = {
      ...OLD_ENV,
    };
    const { getByTestId } = render(<App />);
    const cardElements = getByTestId("app-container");
    expect(cardElements).toBeInTheDocument();
  });
});
