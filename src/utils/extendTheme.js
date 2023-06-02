import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const styles = {
  global: () => ({
    html: {
      width: '100%',
      height: '100%',
    },

    body: {
      width: '100%',
      height: '100%',
    },

    '#root': {
      width: '100%',
      height: '100%',
    },

    '*': {
      boxSizing: 'border-box',
    },
  }),
}

export const theme = extendTheme({
  colors: {
    app: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
  },
  breakpoints,
  styles,
})