import styled from 'styled-components';

import pokemonLogo from "../../img/pokemon-logo.png";

const NavContainer = styled.nav`
    max-height: 82px;
    background-color: var(--color-red);
    display: flex;
    justify-content: center;
`

const Logo = styled.img`
  margin-top: 25px;
	max-height: 90px;
`;

const Header: React.FC<{}> = () => {
  return (
  <NavContainer>
    <Logo alt="Pokémon Logo" src={pokemonLogo} />
  </NavContainer>
  );
}

export default Header;