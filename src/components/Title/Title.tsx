import styled from "styled-components";

const TitleContainer = styled.div`
	margin: 35px 0;
`;

const TitleContent = styled.h1`
	font-size: 26px;
	font-weight: 650;
	text-align: center;
`;

const Title: React.FC<{}> = () => (
	<TitleContainer>
		<TitleContent>Find Pokemon to build your team!</TitleContent>
	</TitleContainer>
)

export default Title;