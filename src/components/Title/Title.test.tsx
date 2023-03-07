import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
	test('renders "Find Pokemon to build your team!" text', () => {
		const { getByText } = render(<Title />);
		const text = getByText(/Find Pokemon to build your team!/i);

		expect(text).toBeInTheDocument();
	});
});
