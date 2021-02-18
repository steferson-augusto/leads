import React from 'react'
import Icon from '@material-ui/icons/SentimentDissatisfiedOutlined'

import { Container } from './styles'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Icon style={{ fontSize: 144 }} />
      <h2>Página não encontrada</h2>
    </Container>
  )
}

export default NotFound
