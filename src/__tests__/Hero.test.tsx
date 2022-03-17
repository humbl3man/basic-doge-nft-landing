import { render } from '@testing-library/react';
import Hero from 'components/Hero';

describe('Components/Hero', () => {
  test('Contains heading', () => {
    const { queryByRole } = render(<Hero collectionURL="" />);
    const h1 = queryByRole('heading');
    expect(h1).toBeInTheDocument();
  });
  test('Do not display collection link when collection is empty', () => {
    const { queryByText } = render(<Hero collectionURL="" />);
    const link = queryByText(/view collection/i);
    expect(link).not.toBeInTheDocument();
  });
  test('Contains collection link when collection url is not empty', () => {
    const mockCollectionUrl = 'https://mockcollection.example';
    const { queryByText } = render(<Hero collectionURL={mockCollectionUrl} />);
    const link = queryByText(/view collection/i);
    expect(link?.getAttribute('href')).toBe(mockCollectionUrl);
  });
});
