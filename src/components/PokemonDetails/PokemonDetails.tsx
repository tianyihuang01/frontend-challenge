import styled from "styled-components";

import TypeFilter from "./components/TypeFilter";
import PokemonItem from "./components/PokemonItem";

import jsonData from "../../data/pokemon-gen1.json";
import type { Pokemon } from "../../interface/types";

const data = jsonData as Pokemon[];


const PokemonTable = styled.table`
	margin: 0 auto;

	thead th{
		padding: 10px;
		font-size: 13px;
    font-weight: 650;
		:nth-child(-n + 2) {
			text-align: left;
		}
	}

	tbody {
		background-color: var(--color-white);
		border-radius: 8px;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
			0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
	}

	tbody tr {
		font-weight: 700;
		font-size: 21px;

		&:first-child {
			td:first-child {
				border-top-left-radius: 8px;
			}
			td:last-child {
				border-top-right-radius: 8px;
			}
		}

		&:last-child {
			td:first-child {
				border-bottom-left-radius: 8px;
			}
			td:last-child {
				border-bottom-right-radius: 8px;
			}
		}

		&:not(:last-child) {
      background: linear-gradient(white, white) padding-box, 
			linear-gradient(270deg, #F8F9FC 0%, #E3E7ED 50.05%, #F8F9FC 100%) border-box;
    	border-bottom: 1px solid transparent;
    }

		td {
			padding: 20px;
			vertical-align: middle;

			&:nth-last-child(-n + 6) {
				text-align: center;
			}
		}
	}
`;

const PokemonDetails: React.FC<{}> = () => {
	return (
		<>
			<TypeFilter/>
			{/* <div className="table-wrapper"> */}
				<PokemonTable>
					<thead>
						<tr>
							<th>Pokemon</th>
							<th>Type(s)</th>
							<th>Attack</th>
							<th>Sp. Attack</th>
							<th>Defense</th>
							<th>Sp. Defense</th>
							<th>Speed</th>
							<th>Hit Points</th>
						</tr>
					</thead>
					<tbody>
						<PokemonItem data={data}/>
					</tbody>
				</PokemonTable>
				<div className="pagination">
					<button className="prev-page">Previous</button>
					<button className="next-page">Next</button>
				</div>
			{/* </div> */}
		</>
	)
};

export default PokemonDetails;