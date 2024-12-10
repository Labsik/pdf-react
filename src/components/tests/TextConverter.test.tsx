import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { convertToPdf } from '@api/convertToPdf';
import TextConverter from '@components/TextConverter';


// In this case, we will not mock the convertToPdf API call
jest.mock('@api/convertToPdf');

describe('TextConverter Component', () => {
  test('should convert text to PDF', async () => {
    const mockPdfUrl = 'https://example.com/fake-url.pdf';

    render(<TextConverter />);

    const textarea = screen.getByPlaceholderText('Enter text to convert to PDF');
    const button = screen.getByText('Convert to PDF');

    fireEvent.change(textarea, { target: { value: 'Test text' } });

    fireEvent.click(button);

    await waitFor(() => screen.getByText(mockPdfUrl));

    expect(screen.getByText(mockPdfUrl)).toBeInTheDocument();

    expect(convertToPdf).toHaveBeenCalledWith('Test text');
  });


});
