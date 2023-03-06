// type of pokemon
export enum EPokemonType {
	NORMAL = 'normal',
	FIRE = 'fire',
	WATER = 'water',
	GRASS = 'grass',
	ELECTRIC = 'electric',
	ICE = 'ice',
	FIGHTING = 'fighting',
	POISON = 'poison',
	GROUND = 'ground',
	FLYING = 'flying',
	PSYCHIC = 'psychic',
	BUG = 'bug',
	ROCK = 'rock',
	GHOST = 'ghost',
	DARK = 'dark',
	DRAGON = 'dragon',
	STEEL = 'steel',
	FAIRY = 'fairy',
};

export const POKEMON_TYPE_STYLES = {
	[EPokemonType.BUG] : {
		color_outline: '#A8B820',
		color_text: '#6D7815',
		color_fill: '#6D7815',
	},
	[EPokemonType.DARK] : {
		color_outline: '#705848',
		color_text: '#49392F',
		color_fill: '#49392F',
	},
	[EPokemonType.DRAGON] : {
		color_outline: '#7038F8',
		color_text: '#4924A1',
		color_fill: '#4924A1',
	},
	[EPokemonType.ELECTRIC] : {
		color_outline: '#F8D030',
		color_text: '#88721A',
		color_fill: '#88721A',
	},
	[EPokemonType.FAIRY] : {
		color_outline: '#EE99AC',
		color_text: '#9B6470',
		color_fill: '#9B6470',
	},
	[EPokemonType.FIGHTING] : {
		color_outline: '#C03028',
		color_text: '#7D1F1A',
		color_fill: '#7D1F1A',
	},
	[EPokemonType.FIRE] : {
		color_outline: '#9C531F',
		color_text: '#9C531F',
		color_fill: '#9C531F',
	},
	[EPokemonType.GHOST] : {
		color_outline: '#705898',
		color_text: '#493963',
		color_fill: '#493963',
	},
	[EPokemonType.GRASS] : {
		color_outline: '#78C850',
		color_text: '#4E8234',
		color_fill: '#4E8234',
	},
	[EPokemonType.GROUND] : {
		color_outline: '#E0C068',
		color_text: '#85723E',
		color_fill: '#85723E',
	},
	[EPokemonType.ICE] : {
		color_outline: '#98D8D8',
		color_text: '#638D8D',
		color_fill: '#638D8D',
	},
	[EPokemonType.NORMAL] : {
		color_outline: '#A8A878',
		color_text: '#6D6D4E',
		color_fill: '#6D6D4E',
	},
	[EPokemonType.POISON] : {
		color_outline: '#A040A0',
		color_text: '#682A68',
		color_fill: '#682A68',
	},
	[EPokemonType.PSYCHIC] : {
		color_outline: '#F85888',
		color_text: '#A13959',
		color_fill: '#A13959',
	},
	[EPokemonType.ROCK] : {
		color_outline: '#B8A038',
		color_text: '#786824',
		color_fill: '#786824',
	},
	[EPokemonType.STEEL] : {
		color_outline: '#B8B8D0',
		color_text: '#747483',
		color_fill: '#747483',
	},
	[EPokemonType.WATER] : {
		color_outline: '#6890F0',
		color_text: '#445E9C',
		color_fill: '#445E9C',
	},
	[EPokemonType.FLYING] : {
		color_outline: '#A890F0',
		color_text: '#6D5E9C',
		color_fill: '#6D5E9C',
	}
}
	
export const POKEMON_TYPES = [
	{
		value: EPokemonType.BUG,
		color_outline: '#A8B820',
		color_text: '#6D7815',
		color_fill: '#6D7815',
	},
	{
		value: EPokemonType.DARK,
		color_outline: '#705848',
		color_text: '#49392F',
		color_fill: '#49392F',
	},
	{
		value: EPokemonType.DRAGON,
		color_outline: '#7038F8',
		color_text: '#4924A1',
		color_fill: '#4924A1',
	},
	{
		value: EPokemonType.ELECTRIC,
		color_outline: '#F8D030',
		color_text: '#88721A',
		color_fill: '#88721A',
	},
	{
		value: EPokemonType.FAIRY,
		color_outline: '#EE99AC',
		color_text: '#9B6470',
		color_fill: '#9B6470',
	},
	{
		value: EPokemonType.FIGHTING,
		color_outline: '#C03028',
		color_text: '#7D1F1A',
		color_fill: '#7D1F1A',
	},
	{
		value: EPokemonType.FIRE,
		color_outline: '#9C531F',
		color_text: '#9C531F',
		color_fill: '#9C531F',
	},
	{
		value: EPokemonType.GHOST,
		color_outline: '#705898',
		color_text: '#493963',
		color_fill: '#493963',
	},
	{
		value: EPokemonType.GRASS,
		color_outline: '#78C850',
		color_text: '#4E8234',
		color_fill: '#4E8234',
	},
	{
		value: EPokemonType.GROUND,
		color_outline: '#E0C068',
		color_text: '#85723E',
		color_fill: '#85723E',
	},
	{
		value: EPokemonType.ICE,
		color_outline: '#98D8D8',
		color_text: '#638D8D',
		color_fill: '#638D8D',
	},
	{
		value: EPokemonType.NORMAL,
		color_outline: '#A8A878',
		color_text: '#6D6D4E',
		color_fill: '#6D6D4E',
	},
	{
		value: EPokemonType.POISON,
		color_outline: '#A040A0',
		color_text: '#682A68',
		color_fill: '#682A68',
	},
	{
		value: EPokemonType.PSYCHIC,
		color_outline: '#F85888',
		color_text: '#A13959',
		color_fill: '#A13959',
	},
	{
		value: EPokemonType.ROCK,
		color_outline: '#B8A038',
		color_text: '#786824',
		color_fill: '#786824',
	},
	{
		value: EPokemonType.STEEL,
		color_outline: '#B8B8D0',
		color_text: '#747483',
		color_fill: '#747483',
	},
	{
		value: EPokemonType.WATER,
		color_outline: '#6890F0',
		color_text: '#445E9C',
		color_fill: '#445E9C',
	},
	{
		value: EPokemonType.FLYING,
		color_outline: '#A890F0',
		color_text: '#6D5E9C',
		color_fill: '#6D5E9C',
	},
]

export const POKEMON_TYPE_ATTRS = [
	EPokemonType.BUG,
	EPokemonType.DARK,
	EPokemonType.DRAGON,
	EPokemonType.ELECTRIC,
	EPokemonType.FAIRY,
	EPokemonType.FIGHTING,
	EPokemonType.FIRE,
	EPokemonType.GHOST,
	EPokemonType.GRASS,
	EPokemonType.GROUND,
	EPokemonType.ICE,
	EPokemonType.NORMAL,
	EPokemonType.POISON,
	EPokemonType.PSYCHIC,
	EPokemonType.ROCK,
	EPokemonType.STEEL,
	EPokemonType.WATER,
	EPokemonType.FLYING,
]