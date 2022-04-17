import { ThemeProvider } from 'styled-components';
import { initReactI18next } from 'react-i18next';
import { render } from '@testing-library/react';
import { I18nContext } from 'next-i18next';
import { ReactElement } from 'react';
import i18n from 'i18next';

import en from '../../public/locales/en/common.json';

import theme from 'visual/theme';

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: false,
  ns: ['common', 'header', 'footer'],
  defaultNS: 'common',
  resources: {
    en: {
      common: en,
    },
  },
});

const customRender = (ui: ReactElement) =>
  render(
    <I18nContext.Provider value={{ i18n }}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </I18nContext.Provider>,
  );

export * from '@testing-library/react';
export { customRender as render };
