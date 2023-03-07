import styled from "styled-components";

import { ButtonContainer, TypeButton } from "../ButtonFilter/ButtonFilter";
import { EPokemonStatTypeBase } from "../../../../constants/stats";
import { PokemonStat, Pokemon } from "../../../../interface/types";
import { EPokemonType } from "../../../../constants/types";

interface PokemonItemProps {
	data: Array<Pokemon>;
	filteredTypes: Array<EPokemonType>;
}

const PokemonIconName = styled.div`
	display: flex;
	align-items: center;

	> *:not(:last-child) {
		margin-right: 10px;
	}
`;

const PokemonIcon = styled.img`
	width: 60px;
	height: 60px;
	border: 1px solid rgb(49, 105, 177);
	border-radius: 50%;
`;

const PokemonStatCell = styled.td<{ color: string }>`
	color: ${(props) => props.color || "var(--color-black)"};
`;

const PokemonItem: React.FC<PokemonItemProps> = (props) => {
	const { data, filteredTypes } = props;

	const renderStats = (stats: Array<PokemonStat>): JSX.Element => {
		let rowStats = {
			[EPokemonStatTypeBase.ATTACK]: { value: 0, color: "var(--color-black)" },
			[EPokemonStatTypeBase.SPECIAL_ATTACK]: {
				value: 0,
				color: "var(--color-black)",
			},
			[EPokemonStatTypeBase.DEFENSE]: { value: 0, color: "var(--color-black)" },
			[EPokemonStatTypeBase.SPECIAL_DEFENSE]: {
				value: 0,
				color: "var(--color-black)",
			},
			[EPokemonStatTypeBase.SPEED]: { value: 0, color: "var(--color-black)" },
			[EPokemonStatTypeBase.HIT_POINTS]: {
				value: 0,
				color: "var(--color-black)",
			},
		};

		stats.forEach((stat) => {
			if (!Object.keys(rowStats).find((key) => key === stat.stat_name)) return;

			const statValue = stat.base_stat + stat.effort;
			let statColor =
				statValue > 90 ? "var(--color-red)" : "var(--color-black)";
			rowStats = {
				...rowStats,
				[stat.stat_name]: {
					value: statValue,
					color: statColor,
				},
			};
		});

		return (
			<>
				{Object.values(rowStats).map(({ value, color }, index) => (
					<PokemonStatCell key={index} color={color}>
						{value}
					</PokemonStatCell>
				))}
			</>
		);
	};

	return (
		<tbody data-testid="pokemon-item">
			{data.map((row) => (
				<tr key={row.id} data-testid="table-row">
					<td>
						<PokemonIconName>
							<PokemonIcon src={row.sprite.front_url} alt="pokemon icon" />
							<div>{row.name}</div>
						</PokemonIconName>
					</td>
					<td>
						<ButtonContainer>
							{row.types.map(({ type_name, slot }) => {
								const filled = filteredTypes.find((item) => item === type_name)
									? true
									: false;
								return (
									<TypeButton
										key={slot}
										customType={type_name}
										filled={filled}
										clicked={false}
									>
										{type_name}
									</TypeButton>
								);
							})}
						</ButtonContainer>
					</td>
					{renderStats(row.stats)}
				</tr>
			))}
		</tbody>
	);
};

export default PokemonItem;
