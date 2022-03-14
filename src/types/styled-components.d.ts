import resolutions from 'visual/resolutions';
import colors from 'visual/colors';
import theme from 'visual/theme';
import fonts from 'visual/fonts';

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
