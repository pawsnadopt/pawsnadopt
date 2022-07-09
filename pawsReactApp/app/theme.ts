// For documentation visit: https://github.com/Shopify/restyle#readme
import {createTheme} from '@shopify/restyle'

const palette = {
  purpleLight: '#B5A6ED',
  purplePrimary: '#9883E5',
  purpleDark: '#6B5CA1',

  greenLight: '#3CC199',
  greenPrimary: '#04A777',
  greenDark: '#027452',

  blueLight: '#569EBD',
  bluePrimary: '#247BA0',
  blueDark: '#195670',

  pinkLight: '##E44690',
  pinkPrimary: '#D90368',
  pinkDark: '##980248',

  greyLight: '#858684',
  greyPrimary: '#50514F',
  greyDark: '#393938',

  black: '#0B0B0B',
  white: '#FFFCFF',
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.greenPrimary,
    buttonPrimaryBackground: palette.pinkPrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontFamily: 'ShopifySans-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: palette.greyPrimary,
    },
    subheader: {
      fontFamily: 'ShopifySans-SemiBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: palette.greyPrimary,
    },
    body: {
      fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: palette.greyPrimary,
    },
  },
})

export type Theme = typeof theme
export default theme
