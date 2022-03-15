import { render, screen } from 'utils/test-utils';

import Navbar from '.';

describe('<Navbar />', () => {
  it('should render ...', () => {
    render(<Navbar />);

    expect(screen.getByText(/cover letter/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/experiences/i)).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();
  });
});
