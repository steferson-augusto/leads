import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-color: ${props => props.theme.colors.background};
    --text-color: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --error: ${props => props.theme.colors.error};
    --sidebar-bg: ${props => props.theme.colors.sidebar.background};
    --sidebar-hover: ${props => props.theme.colors.sidebar.hover};
    --sidebar-active: ${props => props.theme.colors.sidebar.active};
    --surface-bg: ${props => props.theme.colors.surface.background};
    --surface-hover: ${props => props.theme.colors.surface.hover};
    --header-bg: ${props => props.theme.colors.header.background};
    --header-text: ${props => props.theme.colors.header.text};
    --button-primary-text: ${props => props.theme.colors.button.primary.text};
    --button-primary-hover: ${props => props.theme.colors.button.primary.hover};
    --button-secondary-text: ${props =>
      props.theme.colors.button.secondary.text};
    --button-secondary-hover: ${props =>
      props.theme.colors.button.secondary.hover};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font: 400 1.6rem Roboto, sans-serif;
  }

  .elevation-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .elevation-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .elevation-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .elevation-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .elevation-5 {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`
