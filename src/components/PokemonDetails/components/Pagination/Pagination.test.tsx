import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
	const activePage = 2;
	const count = 30;
	const rowsPerPage = 10;
	const totalPages = 3;
	const setActivePage = jest.fn();
	const beginning = rowsPerPage * (activePage - 1) + 1;
  const end = beginning + rowsPerPage - 1;

	test('renders the correct page number and total number of pages', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		expect(getByText(`Page ${activePage} of ${totalPages}`)).toBeInTheDocument();
	});

	test('renders the correct rows range of pages', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		expect(getByText(`Rows: ${beginning === end ? end : `${beginning} - ${end}`} of ${count}`)).toBeInTheDocument();
	});

	test('calls setActivePage with the correct page number when Prev button is clicked', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		const prevButton = getByText('⬅️ Previous');
		fireEvent.click(prevButton);

		expect(setActivePage).toHaveBeenCalledWith(activePage - 1);
	});

	test('calls setActivePage with the correct page number when Next button is clicked', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		const nextButton = getByText('Next ➡️');
		fireEvent.click(nextButton);

		expect(setActivePage).toHaveBeenCalledWith(activePage + 1);
	});

	test('calls setActivePage with the correct page number when first button is clicked', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		const firstButton = getByText('⏮️ First');
		fireEvent.click(firstButton);

		expect(setActivePage).toHaveBeenCalledWith(1);
	});

	test('calls setActivePage with the correct page number when last button is clicked', () => {
		const { getByText } = render(
			<Pagination
				activePage={activePage}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
    );

		const lastButton = getByText('Last ⏭️');
		fireEvent.click(lastButton);

		expect(setActivePage).toHaveBeenCalledWith(totalPages);
	});

	test('disables Prev button when on the first page', () => {
		const { getByText } = render(
			<Pagination
				activePage={1}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
		);

		const prevButton = getByText('⬅️ Previous');

		expect(prevButton).toBeDisabled();
	});

	test('disables First button when on the first page', () => {
		const { getByText } = render(
			<Pagination
				activePage={1}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
		);

		const firstButton = getByText('⏮️ First');

		expect(firstButton).toBeDisabled();
	});

	test('disables Next button when on the last page', () => {
		const { getByText } = render(
			<Pagination
				activePage={totalPages}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
		);

		const nextButton = getByText('Next ➡️');

		expect(nextButton).toBeDisabled();
	});

	test('disables Last button when on the last page', () => {
		const { getByText } = render(
			<Pagination
				activePage={totalPages}
				count={count}
				rowsPerPage={rowsPerPage}
				totalPages={totalPages}
				setActivePage={setActivePage}
			/>
		);

		const lastButton = getByText('Last ⏭️');
		expect(lastButton).toBeDisabled();
	});
})
