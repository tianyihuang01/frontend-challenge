import { EPokemonType } from '@/constants/types';
import { EPokemonStatTypeBase } from '@/constants/stats';

export interface IPokemonBase {
	id: number;
	order: number;
	name: string;
	height: number;
	genus: string;
	habitat: string;
	color: string;
	flavor_text: string;
	stat: Array<IStatDetail>;
	sprite: ISpriteDetail;
	type: object[];
}

export interface IStatDetail {
	base_stat: number;
	effort: number;
	stat_name: EPokemonType;
}

export interface ISpriteDetail {
	artwork_url: string;
	front_url: string;
	back_url: string;
}

export interface IStatTypeDetail {
	slot: number;
	type_name: EPokemonStatTypeBase;
}