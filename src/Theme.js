import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const colors = {
  gray: {
    800: '#191919',
  },
  white: '#fff',
};
const fonts = {
  heading: 'Sans-serif workhorse',
  body: 'Sans-serif workhorse',
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};
// 3. extend the theme
const theme = extendTheme({ colors, config, fonts });

export default theme;
