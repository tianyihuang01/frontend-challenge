import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
	it("should render a NavContainer with a Logo", () => {
		const { getByRole } = render(<Header />);
		const navContainer = getByRole("navigation");
		const logo = getByRole("img", { name: "Pokémon Logo" });

		expect(navContainer).toBeInTheDocument();
		expect(logo).toHaveAttribute("src", "pokemon-logo.png");
		expect(logo).toHaveAttribute("alt", "Pokémon Logo");
	});
});
