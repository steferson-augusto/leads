import React from 'react'
import { useHistory } from 'react-router-dom'
import MaterialTable, { Column } from 'material-table'

import { useSwr } from '../../hooks/useSwr'
import { Lead } from '../../models/Lead'
import localization from '../../utils/tableLocalization'

const Leads: React.FC = () => {
  const history = useHistory()
  const { data, loading } = useSwr('/Leads')
  const columns: Array<Column<Lead>> = [
    { title: 'Nome', field: 'name' },
    { title: 'Campanha', field: 'campaign' },
    { title: 'Fonte', field: 'source' },
    { title: 'Status', field: 'status' },
    {
      title: 'Não ligar',
      field: 'doNotCall',
      lookup: { 1: 'Sim', 0: 'Não' },
      render: ({ doNotCall }) => (doNotCall ? 'Sim' : 'Não')
    }
  ]

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <h1>Leads</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <MaterialTable
        title="Leads"
        columns={columns}
        data={data}
        localization={localization}
        options={{ actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              // setTimeout(() => {
              //   resolve(null)
              //   setState(prevState => {
              //     const data = [...prevState.data]
              //     data.push(newData)
              //     return { ...prevState, data }
              //   })
              // }, 600)
              resolve(null)
              console.log('adicionar')
              console.log(newData)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              // setTimeout(() => {
              //   resolve(null)
              //   if (oldData) {
              //     setState(prevState => {
              //       const data = [...prevState.data]
              //       data[data.indexOf(oldData)] = newData
              //       return { ...prevState, data }
              //     })
              //   }
              // }, 600)
              resolve(null)
              console.log('editar')
              console.log(newData)
              console.log(oldData)
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              // setTimeout(() => {
              //   resolve(null)
              //   setState(prevState => {
              //     const data = [...prevState.data]
              //     data.splice(data.indexOf(oldData), 1)
              //     return { ...prevState, data }
              //   })
              // }, 600)
              resolve(null)
              console.log('deletar')
              console.log(oldData)
            })
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
    </div>
  )
}

export default Leads
