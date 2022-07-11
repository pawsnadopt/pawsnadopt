import {createTheme} from '@shopify/restyle'

const palette = {
  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  gray: '#F0F2F3',
  black: '#0B0B0B',
  white: '#FFFFFF',
}

const theme = createTheme({
  colors: {
    mainBackground: palette.gray,
    cardPrimaryBackground: palette.white,
    boxShadow: palette.black,
    primary: palette.greenPrimary,
    secondary: palette.greenLight,
    text: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  // define screen sizes based on the requirement
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'text',
    },
    subheader: {
      fontFamily: 'Roboto-SemiBold',
      fontWeight: '600',
      fontSize: 24,
      lineHeight: 30,
      color: 'text',
    },
    paragraph: {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    buttonLabel: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'text',
    },
  },
})

export type Theme = typeof theme
export default theme
