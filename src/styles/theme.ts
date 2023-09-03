import {typography} from './theme/typography';
import {colors} from './theme/colors';

const theme = {
  typography,
  colors,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export type ThemeColorVariants = keyof typeof colors;

export default theme;
