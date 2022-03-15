import { render, screen } from 'utils/test-utils';

import Header from '.';

describe('<Header />', () => {
  it('should render ...', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: /Gosch/i })).toBeInTheDocument();
  });
});
