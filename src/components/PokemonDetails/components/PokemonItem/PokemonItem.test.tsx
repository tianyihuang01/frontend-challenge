import { render, fireEvent } from '@testing-library/react';
import PokemonItem from './PokemonItem';

import jsonData from "../../../../data/pokemon-gen1.json";
import type { Pokemon } from "../../../../interface/types";
import { POKEMON_TYPE_ATTRS, EPokemonType } from '../../../../constants/types';

describe('PokemonItem component', () => {
	const data = (jsonData as Pokemon[]).slice(0, 10);

	test('should render the correct number of rows', () => {
		const filteredTypes : Array<EPokemonType> = [];

		const tableRow = document.createElement('table');
    const { getAllByTestId } = render(
			<PokemonItem data={data} filteredTypes={filteredTypes}/>, {
				container: document.body.appendChild(tableRow)
			});
    const rows = getAllByTestId('table-row');

    expect(rows.length).toEqual(data.length);
  });

	test('should filter the rows based on the filter prop', () => {
    const filteredTypes : Array<EPokemonType> = [EPokemonType.BUG, EPokemonType.DARK];
    const filteredData = data.filter(({types}) => 
				types.some(type => filteredTypes.includes(type.type_name))
			);

		const tableRow = document.createElement('table');
		const { getAllByTestId } = render(
			<PokemonItem data={filteredData} filteredTypes={filteredTypes}/>, {
				container: document.body.appendChild(tableRow)
			});
		const rows = getAllByTestId('table-row');

		expect(rows.length).toEqual(filteredData.length);
  });

})