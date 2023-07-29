import type { ThemeDefinition } from 'vuetify'

const CustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#5D87FF',
    secondary: '#49BEFF',
    lightPrimary: '#ECF2FF',
    lightSecondary: '#E8F7FF',
    textPrimary: '#2A3547',
    primaryBorder: '#E5EAEF',
    secondaryBorder: '#C0CDDA',
    background: '#FFFFFF',
    info: '#539BFF',
    success: '#13DEB9',
    warning: '#FFAE1F',
    error: '#FA896B'
  }
}

const CustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#5D87FF',
    secondary: '#49BEFF',
    lightPrimary: '#253662',
    lightSecondary: '#1C455D',
    textPrimary: '#EAEFF4',
    primaryBorder: '#333F55',
    secondaryBorder: '#909BAF',
    background: '#2A3447',
    info: '#539BFF',
    success: '#13DEB9',
    warning: '#FFAE1F',
    error: '#FA896B'
  }
}

export { CustomLightTheme, CustomDarkTheme }
