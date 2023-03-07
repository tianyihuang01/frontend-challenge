import { render, fireEvent } from '@testing-library/react';
import TypeFilter from './TypeFilter';
import { POKEMON_TYPE_ATTRS, EPokemonType } from '../../../../constants/types';

describe('TypeFilter', () => {
	const updateFilter = jest.fn();

	test('renders the correct number of buttons', () => {
    const filteredTypes : Array<EPokemonType> = [];
    const { getAllByTestId } = render(
      <TypeFilter filteredTypes={filteredTypes} updateFilter={updateFilter}/>
    );
    const buttons = getAllByTestId('button');
    expect(buttons.length).toBe(19);
  });

  test('calls the update function when the clear button is clicked', () => {
    const filteredTypes : Array<EPokemonType> = [];
    
    const { getAllByTestId } = render(
      <TypeFilter filteredTypes={filteredTypes} updateFilter={updateFilter}/>
    );
    const buttons = getAllByTestId('button');
    fireEvent.click(buttons[buttons.length-1]); // Click the clear button
    expect(updateFilter).toHaveBeenCalledWith([]);
  });

  test('calls the update function when a selected filter is clicked', () => {
    const filteredTypes : Array<EPokemonType> = [EPokemonType.BUG, EPokemonType.DARK];
    
    const { getAllByTestId } = render(
      <TypeFilter filteredTypes={filteredTypes} updateFilter={updateFilter}/>
    );
    const buttons = getAllByTestId('button');
    fireEvent.click(buttons[POKEMON_TYPE_ATTRS.indexOf(EPokemonType.BUG)]);
    expect(updateFilter).toHaveBeenCalledWith([EPokemonType.DARK]);
  });

  test('calls the update function when an unselected filter is clicked', () => {
    const filteredTypes : Array<EPokemonType> = [EPokemonType.BUG];
    
    const { getAllByTestId } = render(
      <TypeFilter filteredTypes={filteredTypes} updateFilter={updateFilter}/>
    );
    const buttons = getAllByTestId('button');
    fireEvent.click(buttons[POKEMON_TYPE_ATTRS.indexOf(EPokemonType.DARK)]);
    expect(updateFilter).toHaveBeenCalledWith([EPokemonType.BUG, EPokemonType.DARK]);
  });
})