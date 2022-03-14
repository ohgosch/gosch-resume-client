import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';

import theme from 'visual/theme';

const customRender = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

export { customRender as render, screen };
