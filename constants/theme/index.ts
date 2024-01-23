import { Colors, Theme, createTheme } from '@rneui/themed';
import { colors } from './colors';
import { components } from './components';

export type RNETheme = {
  colors: Colors;
} & Theme;

const theme = createTheme({
  ...colors,
  components,
  mode: 'dark' // your light or dark mode value
});

export default theme;
