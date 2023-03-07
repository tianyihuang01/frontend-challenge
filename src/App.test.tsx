import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	test("renders Header", () => {
		const { getByTestId } = render(<App />);
		const header = getByTestId("header");

		expect(header).toBeInTheDocument();
	});

	test("renders title", () => {
		const { getByTestId } = render(<App />);
		const title = getByTestId("title");

		expect(title).toBeInTheDocument();
	});

	test("renders pokemon-details", () => {
		const { getByTestId } = render(<App />);
		const Pokemon = getByTestId("pokemon-details");

		expect(Pokemon).toBeInTheDocument();
	});
});
