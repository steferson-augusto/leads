import styled from 'styled-components'

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  transition: 0.5s;
  overflow-y: auto;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: row;
  z-index: 2;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const Check = styled.input`
  display: none;

  &:checked ~ .sidebar {
    width: 60px;

    .link {
      justify-content: center;
      font-size: 20px;
      text-align: center;
      padding: 0;

      i {
        padding: 0;
      }

      span {
        display: none;
      }
    }
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  padding: 20px;
  height: 30px;
  z-index: 3;
`

export const Mark = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  color: var(--header-text);

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
      display: none;
    }

    i {
      padding: 0px 10px;
    }
  }
`

export const Left = styled.div`
  h3 {
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
    color: var(--header-text);
  }
`

export const Sidebar = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--sidebar-bg);
  padding-bottom: 16px;
  transition: 0.5s;
  transition-property: width;
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    max-height: 60px;
    padding: 0;
    flex-direction: row;
    justify-content: space-around;
    background: var(--header-bg);
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 -3px 6px rgba(0, 0, 0, 0.23);
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: var(--sidebar-bg);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px var(--sidebar-bg);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--header-bg);
    border: solid 2px transparent;
    border-radius: 10px;
  }

  .link {
    color: var(--text-color);
    width: 100%;
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    padding-left: 30px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: all;

    i {
      padding-right: 10px;
    }

    &:hover {
      background: var(--sidebar-hover);
    }

    @media screen and (max-width: 600px) {
      min-width: 60px;
      height: 100%;
      padding: 0;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: var(--header-text);

      &:hover {
        background: var(--header-hover);
      }

      span {
        display: none;
      }

      i {
        padding: 0;
      }
    }
  }
`
