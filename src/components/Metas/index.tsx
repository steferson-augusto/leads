import React, { useCallback, useState } from 'react'
import MaterialTable, { Column } from 'material-table'
import produce, { setAutoFreeze } from 'immer'

import { LeadMeta } from '../../models/LeadMeta'
import localization from '../../utils/tableLocalization'
import api from '../../services/api'
import { useSwr } from '../../hooks/useSwr'

interface Props {
  leadId: string
}

const Metas: React.FC<Props> = ({ leadId }) => {
  setAutoFreeze(false)
  const [refreshing, setRefreshing] = useState(false)
  const { data, loading, mutate } = useSwr<LeadMeta[]>(
    `/Leads/${leadId}/LeadMetas`
  )
  const columns: Array<Column<LeadMeta>> = [
    { title: 'Chave', field: 'metaKey' },
    { title: 'Valor', field: 'metaValue' },
    { title: 'Grupo', field: 'metaGroup' }
  ]

  const add = useCallback(
    async (newData: LeadMeta) => {
      setRefreshing(true)
      try {
        newData.leadId = leadId
        const response = await api.post<LeadMeta>(
          `/Leads/${leadId}/LeadMetas`,
          newData
        )
        const metas = produce(data, draft => {
          draft?.push(response.data)
        })
        mutate(metas, true)
        setRefreshing(false)
      } catch (error) {
        setRefreshing(false)
        console.error(error)
      }
    },
    [refreshing]
  )

  const update = useCallback(async (newData: LeadMeta) => {
    setRefreshing(true)
    try {
      const id = newData.leadMetaId
      await api.put(`/Leads/${leadId}/LeadMetas/${id}`, newData)
      const metas = produce(data as LeadMeta[], draft => {
        draft[draft.findIndex(meta => meta.leadId === newData.leadId)] = newData
      })
      mutate(metas, true)
      setRefreshing(false)
    } catch (error) {
      setRefreshing(false)
      console.error(error)
    }
  }, [])

  const remove = useCallback(
    async (oldData: LeadMeta) => {
      setRefreshing(true)
      try {
        const id = oldData.leadMetaId
        await api.delete(`/Leads/${leadId}/LeadMetas/${id}`)
        const metas = produce(data, draft => {
          draft?.splice(
            draft.findIndex(meta => meta.leadMetaId === id),
            1
          )
        })
        mutate(metas, true)
        setRefreshing(false)
      } catch (error) {
        setRefreshing(false)
        console.error(error?.data)
      }
    },
    [refreshing]
  )

  return (
    <MaterialTable
      title="Metas"
      columns={columns}
      data={data as LeadMeta[]}
      localization={localization}
      options={{ actionsColumnIndex: -1 }}
      isLoading={refreshing || loading}
      editable={{
        onRowAdd: add,
        onRowUpdate: update,
        onRowDelete: remove
      }}
    />
  )
}

export default Metas
