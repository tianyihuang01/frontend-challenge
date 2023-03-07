import styled from "styled-components";

import pokemonLogo from "../../img/pokemon-logo.png";

const NavContainer = styled.nav`
	max-height: 82px;
	background-color: var(--color-red);
	display: flex;
	justify-content: center;
	position: fixed;
	width: 100%;
`;

const Logo = styled.img`
	margin-top: 25px;
	max-height: 90px;
`;

const Header: React.FC<{}> = () => {
	return (
		<NavContainer data-testid="header">
			<Logo alt="Pokémon Logo" src={pokemonLogo} />
		</NavContainer>
	);
};

export default Header;
