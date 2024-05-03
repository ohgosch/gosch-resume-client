'use client';

import StyledComponentsRegistry from 'lib/registry';
import { GlobalStyle } from 'lib/visual/styles/GlobalStyle';
import theme from 'lib/visual/theme';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
