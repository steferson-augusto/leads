import React from 'react'
import MaterialTable, { Column } from 'material-table'

import { useSwr } from '../../hooks/useSwr'
import { Person } from '../../models/Person'
import localization from '../../utils/tableLocalization'
import { Container } from './styles'

const People: React.FC = () => {
  const { data, loading } = useSwr<Person[]>('/People')
  const columns: Array<Column<Person>> = [{ title: 'Nome', field: 'name' }]

  if (loading) return <p>Carregando...</p>

  return (
    <Container>
      <MaterialTable
        title="Pessoas"
        columns={columns}
        data={data as Person[]}
        localization={localization}
        style={{ width: '100%' }}
      />
    </Container>
  )
}

export default People
