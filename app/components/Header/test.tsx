import { render, screen } from '@testing-library/react';
import Header, { type HeaderProps } from 'components/Header/index';

describe('<Header />', () => {
  const props: HeaderProps = {
    socialMedias: [
      {
        url: 'http://linked-in.com',
        display: 'Linked-in',
        slug: 'linkedin',
      },
      {
        url: 'http://linked-in.com',
        display: 'GitHub',
        slug: 'github',
      },
      {
        url: 'http://linked-in.com',
        display: 'WhatsApp',
        slug: 'whatsapp',
      },
    ],
  };

  it('should render ...', () => {
    render(<Header {...props} />);

    expect(screen.getByRole('heading', { name: /Gosch/i })).toBeInTheDocument();

    expect(screen.getByText(props.socialMedias[0].display)).toBeInTheDocument();
    expect(screen.getByText(props.socialMedias[1].display)).toBeInTheDocument();
    expect(screen.getByText(props.socialMedias[2].display)).toBeInTheDocument();
  });
});
