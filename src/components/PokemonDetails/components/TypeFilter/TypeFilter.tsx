import styled from "styled-components";
import { ButtonContainer, TypeButton } from "../ButtonFilter/ButtonFilter";
import { POKEMON_TYPE_ATTRS, EPokemonType } from "../../../../constants/types";

interface TypeFilterProps {
	filteredTypes: Array<EPokemonType>;
	updateFilter: (newFilteredTypes: Array<EPokemonType>) => void;
}

const ClearButton = styled.button`
	background: none;
	border: none;
	text-decoration: underline;
	cursor: pointer;
	color: var(--color-gray-dark);
`;

const TypeFilter: React.FC<TypeFilterProps> = (props) => {
	const { filteredTypes, updateFilter } = props;

	const handleFilter = (clickedType: EPokemonType): void => {
		filteredTypes.includes(clickedType)
			? updateFilter(filteredTypes.filter((item) => item !== clickedType))
			: updateFilter([...filteredTypes, clickedType]);
	};

	const clearFilter = () => {
		updateFilter([]);
	};

	return (
		<>
			<ButtonContainer data-testid="type-filter">
				{POKEMON_TYPE_ATTRS.map((type, index) => {
					const filled = filteredTypes.find((item) => item === type)
						? true
						: false;
					return (
						<TypeButton
							key={index}
							customType={type}
							filled={filled}
							clicked={true}
							onClick={() => handleFilter(type)}
							data-testid="button"
						>
							{type}
						</TypeButton>
					);
				})}
				<ClearButton data-testid="button" onClick={clearFilter}>
					Clear all
				</ClearButton>
			</ButtonContainer>
		</>
	);
};

export default TypeFilter;
