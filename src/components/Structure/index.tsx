import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'

import {
  Header,
  Left,
  Sidebar,
  Mark,
  Container,
  Wrapper,
  Check,
  Content
} from './styles'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

const offColor = lighten(0.4, dark.colors.header.background)
const onColor = lighten(0.15, light.colors.header.background)

interface StructureProps {
  toogleTheme: () => void
}

const Structure: React.FC<StructureProps> = ({ children, toogleTheme }) => {
  const { title: theme } = useContext(ThemeContext)

  return (
    <Container>
      <Header className="elevate-5">
        <Mark>
          <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <Left>
            <h3>TESTE PRÁTICO</h3>
          </Left>
        </Mark>
        <Switch
          onChange={toogleTheme}
          checked={theme === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={offColor}
          onColor={onColor}
        />
      </Header>

      <Wrapper>
        <Check type="checkbox" id="check" />
        <Sidebar className="sidebar">
          <Link to="/" className="link">
            <i className="fas fa-chart-bar" />
            <span>Leads</span>
          </Link>
          <Link to="/" className="link">
            <i className="fas fa-users" />
            <span>Pessoas</span>
          </Link>
        </Sidebar>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  )
}

export default Structure
