import "css-wipe";
import styled from "styled-components";
import Header from "./components/Header";
import Title from "./components/Title";
import PokemonDetails from "./components/PokemonDetails";

const Main = styled.main`
	max-width: 1290px;
	margin: 0 auto;
	padding-top: 83px;
`;

function App() {
	return (
		<div>
			<Header />
			<Main>
				<Title />
				<PokemonDetails />
			</Main>
		</div>
	);
}

export default App;
