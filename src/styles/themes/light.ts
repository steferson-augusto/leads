import { ThemeOptions } from '@material-ui/core/styles'
import { shade } from 'polished'

const primary = '#5e35b1'
const secondary = '#018786'

const light = {
  title: 'light',

  colors: {
    text: '#333',
    primary: primary,
    secondary: '#018786',
    error: '#b00020',

    background: '#f5f5f5',
    sidebar: {
      background: '#E5E5E5',
      hover: '#D5D5D5',
      active: '#C5C5C5'
    },
    surface: {
      background: '#D5D5D5',
      paper: '#f5f5f5',
      hover: '#C5C5C5'
    },
    header: {
      background: primary,
      hover: shade(0.3, primary),
      text: '#E1E1E6'
    },
    button: {
      primary: {
        text: '#f5f5f5',
        hover: shade(0.3, primary)
      },
      secondary: {
        text: '#f5f5f5',
        hover: shade(0.3, secondary)
      }
    }
  }
}

export const muiLight: ThemeOptions = {
  palette: {
    type: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#f5f5f5'
    },
    text: {
      primary: '#333',
      secondary: '#333'
    },
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    error: {
      main: '#b00020'
    }
  }
}

export default light
