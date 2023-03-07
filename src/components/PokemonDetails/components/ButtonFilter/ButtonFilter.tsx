import styled from "styled-components";
import { EPokemonType } from "../../../../constants/types";

export const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

export const TypeButton = styled.button<{
	customType: string;
	filled: boolean;
	clicked: boolean;
}>`
	padding: 9px 12px;
	font-size: 14px;
	font-weight: 700;
	border-width: 1px;
	border-style: solid;
	border-radius: 16px;
	margin-top: 3px;
	margin-bottom: 3px;
	cursor: ${(props) => (props.clicked ? "pointer" : "auto")};

	&:not(:last-child) {
		margin-right: 5px;
	}

	${(props) =>
		({
			[EPokemonType.BUG]: `
			border-color: var(--color-type-bug);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-bug-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-bug-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.DARK]: `
			border-color: var(--color-type-dark);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-dark-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-dark-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.DRAGON]: `
			border-color: var(--color-type-dragon);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-dragon-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-dragon-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.ELECTRIC]: `
			border-color: var(--color-type-electric);
			color: ${
				props.filled ? "var(--color-white)" : "var(--color-type-electric-alt)"
			};
			background-color: ${
				props.filled ? "var(--color-type-electric-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.FAIRY]: `
			border-color: var(--color-type-fairy);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-fairy-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-fairy-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.FIGHTING]: `
			border-color: var(--color-type-fighting);
			color: ${
				props.filled ? "var(--color-white)" : "var(--color-type-fighting-alt)"
			};
			background-color: ${
				props.filled ? "var(--color-type-fighting-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.FIRE]: `
			border-color: var(--color-type-fire);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-fire-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-fire-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.GHOST]: `
			border-color: var(--color-type-ghost);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-ghost-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-ghost-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.GRASS]: `
			border-color: var(--color-type-grass);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-grass-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-grass-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.GROUND]: `
			border-color: var(--color-type-ground);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-ground-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-ground-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.ICE]: `
			border-color: var(--color-type-ice);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-ice-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-ice-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.NORMAL]: `
			border-color: var(--color-type-normal);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-normal-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-normal-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.POISON]: `
			border-color: var(--color-type-poison);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-poison-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-poison-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.PSYCHIC]: `
			border-color: var(--color-type-psychic);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-psychic-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-psychic-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.ROCK]: `
			border-color: var(--color-type-rock);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-rock-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-rock-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.STEEL]: `
			border-color: var(--color-type-steel);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-steel-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-steel-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.WATER]: `
			border-color: var(--color-type-water);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-water-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-water-alt)" : "var(--color-white)"
			};
		`,
			[EPokemonType.FLYING]: `
			border-color: var(--color-type-flying);
			color: ${props.filled ? "var(--color-white)" : "var(--color-type-flying-alt)"};
			background-color: ${
				props.filled ? "var(--color-type-flying-alt)" : "var(--color-white)"
			};
		`,
		}[(props.customType as string) || EPokemonType.BUG])}
`;
