import styled from 'styled-components';
import {EPokemonType } from '../../../../constants/types';

export const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

export const TypeButton = styled.button<{customType: string, filled: boolean, clicked: boolean}>`
	padding: 9px 12px;
	font-size: 14px;
	font-weight: 700;
	border-width: 1px;
	border-style: solid;
	border-radius: 16px;
	margin-bottom: 5px;
	cursor: ${(props) => props.clicked ? 'pointer' : 'auto'};
	
	&:not(:last-child) {
		margin-right: 5px; 
	}

	${(props) => ({
		[EPokemonType.BUG]: `
			border-color: #A8B820;
			color: ${props.filled ? '#FFFFFF' : '#6D7815'};
			background-color: ${props.filled ? '#6D7815' : '#FFFFFF' };
		`,
		[EPokemonType.DARK]: `
			border-color: #705848;
			color: ${props.filled ? '#FFFFFF' : '#49392F'};
			background-color: ${props.filled ? '#49392F' : '#FFFFFF' };
		`,
		[EPokemonType.DRAGON]: `
			border-color: #7038F8;
			color: ${props.filled ? '#FFFFFF' : '#4924A1'};
			background-color: ${props.filled ? '#4924A1' : '#FFFFFF' };
		`,
		[EPokemonType.ELECTRIC]: `
			border-color: #F8D030;
			color: ${props.filled ? '#FFFFFF' : '#88721A'};
			background-color: ${props.filled ? '#88721A' : '#FFFFFF' };
		`,
		[EPokemonType.FAIRY]: `
			border-color: #EE99AC;
			color: ${props.filled ? '#FFFFFF' : '#9B6470'};
			background-color: ${props.filled ? '#9B6470' : '#FFFFFF' };
		`,
		[EPokemonType.FIGHTING]: `
			border-color: #C03028;
			color: ${props.filled ? '#FFFFFF' : '#7D1F1A'};
			background-color: ${props.filled ? '#7D1F1A' : '#FFFFFF' };
		`,
		[EPokemonType.FIRE]: `
			border-color: #9C531F;
			color: ${props.filled ? '#FFFFFF' : '#9C531F'};
			background-color: ${props.filled ? '#9C531F' : '#FFFFFF' };
		`,
		[EPokemonType.GHOST]: `
			border-color: #705898;
			color: ${props.filled ? '#FFFFFF' : '#493963'};
			background-color: ${props.filled ? '#493963' : '#FFFFFF' };
		`,
		[EPokemonType.GRASS]: `
			border-color: #78C850;
			color: ${props.filled ? '#FFFFFF' : '#4E8234'};
			background-color: ${props.filled ? '#4E8234' : '#FFFFFF' };
		`,
		[EPokemonType.GROUND]: `
			border-color: #E0C068;
			color: ${props.filled ? '#FFFFFF' : '#85723E'};
			background-color: ${props.filled ? '#85723E' : '#FFFFFF' };
		`,
		[EPokemonType.ICE]: `
			border-color: #98D8D8;
			color: ${props.filled ? '#FFFFFF' : '#638D8D'};
			background-color: ${props.filled ? '#638D8D' : '#FFFFFF' };
		`,
		[EPokemonType.NORMAL]: `
			border-color: #A8A878;
			color: ${props.filled ? '#FFFFFF' : '#6D6D4E'};
			background-color: ${props.filled ? '#6D6D4E' : '#FFFFFF' };
		`,
		[EPokemonType.POISON]: `
			border-color: #A040A0;
			color: ${props.filled ? '#FFFFFF' : '#682A68'};
			background-color: ${props.filled ? '#682A68' : '#FFFFFF' };
		`,
		[EPokemonType.PSYCHIC]: `
			border-color: #F85888;
			color: ${props.filled ? '#FFFFFF' : '#A13959'};
			background-color: ${props.filled ? '#A13959' : '#FFFFFF' };
		`,
		[EPokemonType.ROCK]: `
			border-color: #B8A038;
			color: ${props.filled ? '#FFFFFF' : '#786824'};
			background-color: ${props.filled ? '#786824' : '#FFFFFF' };
		`,
		[EPokemonType.STEEL]: `
			border-color: #B8B8D0;
			color: ${props.filled ? '#FFFFFF' : '#747483'};
			background-color: ${props.filled ? '#747483' : '#FFFFFF' };
		`,
		[EPokemonType.WATER]: `
			border-color: #6890F0;
			color: ${props.filled ? '#FFFFFF' : '#445E9C'};
			background-color: ${props.filled ? '#445E9C' : '#FFFFFF' };
		`,
		[EPokemonType.FLYING]: `
			border-color: #A890F0;
			color: ${props.filled ? '#FFFFFF' : '#6D5E9C'};
			background-color: ${props.filled ? '#6D5E9C' : '#FFFFFF' };
		`,
	}[props.customType as string || EPokemonType.BUG])}
`;