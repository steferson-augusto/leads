import { shade, lighten } from 'polished'
import { ThemeOptions } from '@material-ui/core/styles'

const primary = '#BB86FC'
const secondary = '#03DAC6'

const dark = {
  title: 'dark',

  colors: {
    text: '#E1E1E6',
    primary: primary,
    secondary: secondary,
    error: '#CF6679',

    background: '#121212',
    sidebar: {
      background: '#333',
      hover: '#222',
      active: '#444'
    },
    surface: {
      background: '#1F1F1F',
      paper: '#1F1F1F',
      hover: '#333'
    },
    header: {
      background: '#1F1F1F',
      hover: lighten(0.08, '#1F1F1F'),
      text: '#E1E1E6'
    },
    button: {
      primary: {
        text: '#222',
        hover: lighten(0.09, primary)
      },
      secondary: {
        text: '#f5f5f5',
        hover: shade(0.3, secondary)
      }
    }
  }
}

export const muiDark: ThemeOptions = {
  palette: {
    type: 'dark',
    background: {
      default: '#121212',
      paper: '#1F1F1F'
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#f5f5f5'
    },
    primary: {
      main: '#BB86FC'
    },
    secondary: {
      main: '#03DAC6'
    },
    error: {
      main: '#CF6679'
    },
    action: {
      hover: '#ff0'
    }
  }
}

export default dark
