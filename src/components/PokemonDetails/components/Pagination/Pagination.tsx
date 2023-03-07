import styled from 'styled-components';

interface PaginationProps {
	activePage: number;
	count: number;
	rowsPerPage: number;
	totalPages: number;
	setActivePage: (pageNumber: number) => void;
}

const PaginationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;

	> *:not(:last-child) {
		margin-bottom: 5px;
	}
`;

const PaginationButton = styled.button<{disabled: boolean}>`
	padding: 9px 12px;
	border-width: 0;
	border-radius: 16px;
	margin-bottom: 5px;
	cursor: ${props => props.disabled ? 'auto' : 'pointer' };

	&:not(:last-child) {
		margin-right: 6px;
	}
`;

const Pagination: React.FC<PaginationProps> = (props) => {
	const {activePage, count, rowsPerPage, totalPages, setActivePage} = props;

	const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

	return (
		<PaginationContainer data-testid='pagination'>
			<div>
				<PaginationButton disabled={activePage === 1} onClick={() => setActivePage(1)}>
					⏮️ First
				</PaginationButton>
				<PaginationButton disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
					⬅️ Previous
				</PaginationButton>
				<PaginationButton disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
					Next ➡️
				</PaginationButton>
				<PaginationButton disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
					Last ⏭️
				</PaginationButton>
			</div>
			<p>
				Page {activePage} of {totalPages}
			</p>
			<p>
				Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
			</p>
		</PaginationContainer>
	)
}

export default Pagination;