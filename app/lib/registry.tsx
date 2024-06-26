'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { type PropsWithChildren, useState } from 'react';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

import theme from './visual/theme';

export default function StyledComponentsRegistry({
  children,
}: PropsWithChildren) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
