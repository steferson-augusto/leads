import React from 'react'
import Icon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined'

import { Container } from './styles'

const Error: React.FC = () => {
  return (
    <Container>
      <Icon style={{ fontSize: 144 }} />
      <h2>Houve um problema</h2>
      <h5>Fale com o administrador ou tente novamente mais tarde</h5>
    </Container>
  )
}

export default Error
