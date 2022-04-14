import { render, screen } from 'utils/test-utils';

import Header, { HeaderProps } from '.';

describe('<Header />', () => {
  const props: HeaderProps = {
    data: [
      {
        url: 'http://linked-in.com',
        display: 'Linked-in',
        id: 0,
        slug: 'linkedin',
      },
      {
        url: 'http://linked-in.com',
        display: 'GitHub',
        id: 0,
        slug: 'github',
      },
      {
        url: 'http://linked-in.com',
        display: 'WhatsApp',
        id: 0,
        slug: 'whatsapp',
      },
    ],
  };

  it('should render ...', () => {
    render(<Header {...props} />);

    expect(screen.getByRole('heading', { name: /Gosch/i })).toBeInTheDocument();

    expect(screen.getByText(props.data[0].display)).toBeInTheDocument();
    expect(screen.getByText(props.data[1].display)).toBeInTheDocument();
    expect(screen.getByText(props.data[2].display)).toBeInTheDocument();
  });
});
