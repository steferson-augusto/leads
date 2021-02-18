import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MaterialTable, { Column } from 'material-table'
import produce, { setAutoFreeze } from 'immer'

import { useSwr } from '../../hooks/useSwr'
import { Lead } from '../../models/Lead'
import localization from '../../utils/tableLocalization'
import { Container } from './styles'
import api from '../../services/api'

const Leads: React.FC = () => {
  setAutoFreeze(false)
  const history = useHistory()
  const { data, loading, mutate } = useSwr<Lead[]>('/Leads')
  const [refreshing, setRefreshing] = useState(false)
  const columns: Array<Column<Lead>> = [
    { title: 'Nome', field: 'name' },
    { title: 'Campanha', field: 'campaign', editable: 'onAdd' },
    { title: 'Fonte', field: 'source', editable: 'onAdd' },
    { title: 'Status', field: 'status' },
    {
      title: 'Não ligar',
      field: 'doNotCall',
      type: 'boolean',
      render: ({ doNotCall }) => (doNotCall ? 'Sim' : 'Não')
    }
  ]

  const add = useCallback(async (newData: Lead) => {
    setRefreshing(true)
    try {
      console.log(newData)
      newData.accountId = '4b263def-0a40-11eb-98f3-00ff654bd37a'
      const response = await api.post<Lead>('/Leads', newData)
      const leads = produce(data, draft => {
        draft?.push(response.data)
      })
      mutate(leads, true)
      setRefreshing(false)
    } catch (error) {
      setRefreshing(false)
      console.error(error?.data)
    }
  }, [])

  const update = useCallback(async (newData: Lead) => {
    setRefreshing(true)
    try {
      await api.put<Lead>(`/Leads/${newData.leadId}`, newData)
      const leads = produce(data as Lead[], draft => {
        draft[draft.findIndex(lead => lead.leadId === newData.leadId)] = newData
      })
      mutate(leads, true)
      setRefreshing(false)
    } catch (error) {
      setRefreshing(false)
      console.error(error)
    }
  }, [])

  if (loading) return <p>Carregando...</p>

  return (
    <Container>
      <MaterialTable
        title="Leads"
        columns={columns}
        data={data as Lead[]}
        isLoading={refreshing}
        localization={localization}
        options={{ actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: add,
          onRowUpdate: update
        }}
        actions={[
          {
            icon: 'info',
            tooltip: 'Visualizar informações',
            onClick: (_event, row) => {
              const lead = row as Lead
              history.push(`/leads/${lead?.leadId}`)
            }
          }
        ]}
      />
    </Container>
  )
}

export default Leads
