import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "80em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    teal: {
      50: "#b5f7ea",
      100: "#8bf1dc",
      200: "#5fe9cf",
      300: "#35e3c1",
      400: "#1ccaa7",
      500: "#0d9d82",
      600: "#00705d",
      700: "#004438",
      800: "#001813",
      900: "#001813",
    },
    bluex: {
      400: "#415972",
      500: "#2d4052",
      600: "#192633",
    },
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg width="3000" height="3163" viewBox="0 0 3000 3163" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
  shadows: {
    ...chakraTheme.shadows,
    outline: "none",
  },
};

export default theme;
