import { render } from "@testing-library/react";
import { TypeButton, ButtonContainer } from "./ButtonFilter";
import { EPokemonType } from "../../../../constants/types";

describe("ButtonFilter", () => {
	test("renders a button with the correct styles", () => {
		const { getByRole } = render(
			<TypeButton customType={EPokemonType.BUG} filled={true} clicked={false}>
				{EPokemonType.BUG}
			</TypeButton>
		);
		const button = getByRole("button");

		expect(button).toHaveStyle(`
			padding: 9px 12px;
			font-size: 14px;
			font-weight: 700;
			border-width: 1px;
			border-style: solid;
			border-radius: 16px;
			margin-top: 3px;
			margin-bottom: 3px;
			cursor: auto;
    `);
	});

	test("renders a button container with the correct styles", () => {
		const { container } = render(<ButtonContainer />);
		const buttonContainer = container.firstChild;

		expect(buttonContainer).toHaveStyle(`
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
    `);
	});
});
