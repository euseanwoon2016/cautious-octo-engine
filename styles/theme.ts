// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  green: {
    900: 'hsla(206, 66%, 28%, 1)',
    800: 'hsla(206, 66%, 34%, 1)',
    700: 'hsla(199, 72%, 36%, 1)',
    600: 'hsla(194, 77%, 38%, 1)',
    500: 'hsla(182, 52%, 42%, 1)',
    400: 'hsla(163, 41%, 52%, 1)',
    300: 'hsla(141, 43%, 62%, 1)',
    200: 'hsla(110, 50%, 70%, 1)',
    100: 'hsla(92, 62%, 72%, 1)',
    50: 'hsla(73, 72%, 75%, 1)',
  },
  blue: {
    900: 'hsla(239, 94%, 19%, 1)',
    800: 'hsla(214, 97%, 27%, 1)',
    700: 'hsla(201, 100%, 36%, 1)',
    600: 'hsla(195, 100%, 39%, 1)',
    500: 'hsla(190, 100%, 42%, 1)',
    400: 'hsla(190, 74%, 59%, 1)',
    300: 'hsla(189, 75%, 75%, 1)',
    200: 'hsla(190, 76%, 82%, 1)',
    100: 'hsla(190, 77%, 88%, 1)',
    50: 'hsla(191, 78%, 89%, 1)',
  },
};

export const theme = extendTheme({ colors });
