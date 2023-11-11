import { render, screen } from '@testing-library/react';
import Navbar from 'components/Navbar/index';

describe('<Navbar />', () => {
  it('should render ...', () => {
    render(<Navbar />);

    expect(screen.getByText(/cover letter/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/experiences/i)).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();
  });
});
