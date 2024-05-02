import type colors from 'lib/visual/colors';
import type fonts from 'lib/visual/fonts';
import type resolutions from 'lib/visual/resolutions';
import type theme from 'lib/visual/theme';

type Resolutions = typeof resolutions;
type Colors = typeof colors;
type Fonts = typeof fonts;
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    resolutions: Resolutions;
    colors: Colors;
    fonts: Fonts;
  }
}
