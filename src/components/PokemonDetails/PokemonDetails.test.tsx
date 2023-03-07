import { render, fireEvent } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";

import jsonData from "../../data/pokemon-gen1.json";
import type { Pokemon } from "../../interface/types";

describe("PokemonDetails", () => {
	const data = (jsonData as Pokemon[]).slice(0, 10);

	test("renders filter with correct props", () => {
		const { getByTestId } = render(<PokemonDetails />);
		const filter = getByTestId("type-filter");

		expect(filter).toBeInTheDocument();
	});

	test("renders pokemon item", () => {
		const { getByTestId } = render(<PokemonDetails />);
		const pokemonItem = getByTestId("pokemon-item");

		expect(pokemonItem).toBeInTheDocument();
	});

	test("renders pagination", () => {
		const { getByTestId } = render(<PokemonDetails />);
		const pagination = getByTestId("pagination");

		expect(pagination).toBeInTheDocument();
	});

	test("should show empty view if types do not found", () => {
		const { getByRole, getByTestId } = render(<PokemonDetails />);
		const darkButton = getByRole("button", { name: /dark/i });
		fireEvent.click(darkButton);
		const pokemonItem = getByTestId("pokemon-empty-view");

		expect(pokemonItem).toBeInTheDocument();
	});
});
