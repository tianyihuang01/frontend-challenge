import styled from 'styled-components';

import { ButtonContainer, TypeButton } from '../FilterButton/FilterButton';
import { EPokemonStatTypeBase } from '../../../../constants/stats';
import { StatName, PokemonStat, Pokemon } from '../../../../interface/types';


interface PokemonItemProps {
	data: Array<Pokemon>;
}

const PokemonIconName = styled.div`
	display: flex;
	align-items: center;

	> *:not(:last-child) {
		margin-right: 10px; 
	}
`

const PokemonIcon = styled.img`
	width: 60px;
	height: 60px;
	border: 1px solid rgb(49, 105, 177);
	border-radius: 50%;
`;

const PokemonStatCell = styled.td<{color: string}>`
	color: ${props => props.color || 'black'};
`;

const PokemonItem: React.FC<PokemonItemProps> = (props) => {
	const {data} = props;

	const renderStats = (stats : Array<PokemonStat>) => {
		let rowStats = {
			[EPokemonStatTypeBase.ATTACK]: {value: 0, color: 'black'},
			[EPokemonStatTypeBase.SPECIAL_ATTACK]: {value: 0, color: 'black'},
			[EPokemonStatTypeBase.DEFENSE]: {value: 0, color: 'black'},
			[EPokemonStatTypeBase.SPECIAL_DEFENSE]: {value: 0, color: 'black'},
			[EPokemonStatTypeBase.SPEED]: {value: 0, color: 'black'},
			[EPokemonStatTypeBase.HIT_POINTS]: {value: 0, color: 'black'},
		};

		stats.forEach((stat) => {
			if (!(Object.keys(rowStats).find(key => key === stat.stat_name))) return;

			const statValue = stat.base_stat + stat.effort;
			let statColor = statValue > 90 ? 'red' : 'black';
			rowStats = {
				...rowStats, 
				[stat.stat_name]: { 
					value: statValue, 
					color: statColor,
				}
			};
		});

		return (
			<>
				{Object.values(rowStats).map(({value, color}) => (
					<PokemonStatCell color={color}>{value}</PokemonStatCell>
				))}
			</>
		)
	}

	return (
		<>
			{data.map((row) => (
				<tr>
					<td>
						<PokemonIconName>
								<PokemonIcon src={row.sprite.front_url} alt='pokemon icon'/>
								<div>{row.name}</div>
						</PokemonIconName>
					</td>
					<td>
						<ButtonContainer>
							{row.types.map(({type_name}) => (
									<TypeButton customType={type_name} filled={false} clicked={false}>{type_name}</TypeButton>
							))}
						</ButtonContainer>
					</td>
					{renderStats(row.stats)}
				</tr>
			))}
		</>
	)
}

export default PokemonItem;