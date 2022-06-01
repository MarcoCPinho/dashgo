import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "400": "#616480",
      "300": "#797D9A",
      "200": "#9699B0",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    }
  },
  fonts:{
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})