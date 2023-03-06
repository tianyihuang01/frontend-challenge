import styled from 'styled-components';
import { ButtonContainer, TypeButton } from '../FilterButton/FilterButton';
import { POKEMON_TYPE_ATTRS, EPokemonType } from '../../../../constants/types';

const ClearButton = styled.button`
	background: none;
  border: none;
	text-decoration: underline;
  cursor: pointer;
	color: gray;
`

const TypeFilter: React.FC<{}> = (props) => {
	return (
		<>
			<ButtonContainer>
				{POKEMON_TYPE_ATTRS.map((type, index) => (
					<TypeButton key={index} customType={type} filled={false} clicked={true}>{type}</TypeButton>
				))}
				<ClearButton>Clear all</ClearButton>
			</ButtonContainer>
		</>
	)
}

export default TypeFilter;