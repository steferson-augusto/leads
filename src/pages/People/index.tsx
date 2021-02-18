import React from 'react'
import MaterialTable, { Column } from 'material-table'

import { useSwr } from '../../hooks/useSwr'
import { Person } from '../../models/Person'
import localization from '../../utils/tableLocalization'
import { Container } from './styles'
import Error from '../../components/Error'

const People: React.FC = () => {
  const { data, loading, error } = useSwr<Person[]>('/People')
  const columns: Array<Column<Person>> = [{ title: 'Nome', field: 'name' }]

  if (error) return <Error />

  return (
    <Container>
      <MaterialTable
        title="Pessoas"
        columns={columns}
        isLoading={loading}
        data={data as Person[]}
        localization={localization}
        style={{ width: '100%' }}
      />
    </Container>
  )
}

export default People
