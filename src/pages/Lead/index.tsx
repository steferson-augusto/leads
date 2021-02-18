/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import produce from 'immer'
import { mutate as mutateGlobal } from 'swr'
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import { useSwr } from '../../hooks/useSwr'
import api from '../../services/api'
import { Lead as LeadInterface } from '../../models/Lead'
import { Container, Form, Body, LoadContainer } from './styles'
import Metas from '../../components/Metas'
import TabPanel from '../../components/TapPanel'
import Error from '../../components/Error'

interface ParamsProps {
  id: string
}

const Lead: React.FC = () => {
  const { id } = useParams<ParamsProps>()
  const { data, loading, mutate, error } = useSwr<LeadInterface>(`/Leads/${id}`)
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const form = e.currentTarget as any
      const values = {
        leadId: id,
        name: form.name.value,
        status: form.status.value,
        doNotCall: form.doNotCall.checked
      }
      await api.put<LeadInterface>(`/Leads/${id}`, values)
      const lead = produce(data, (draft: LeadInterface) => {
        draft.name = values.name
        draft.status = values.status
        draft.doNotCall = values.doNotCall
      })
      mutate(lead, true)
      mutateGlobal('/Leads', [], true)
    } catch (error) {
      console.error(error)
    }
  }

  if (loading)
    return (
      <LoadContainer>
        <Skeleton variant="text" width={240} height={40} />
        <Skeleton variant="rect" width="100%" height={228} />
      </LoadContainer>
    )

  if (error) return <Error />

  return (
    <Body>
      <Paper variant="elevation" style={{ width: '100%', borderRadius: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          className="tabs"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab label="Lead" />
          <Tab label="Metas" />
        </Tabs>
      </Paper>
      <Container>
        <TabPanel value={value} index={0}>
          <h2>Lead {data?.name}</h2>
          <form onSubmit={onSubmit}>
            <Card>
              <CardContent>
                <Form>
                  <TextField
                    name="name"
                    label="Nome"
                    type="text"
                    value={data?.name}
                  />
                  <TextField
                    name="status"
                    label="Status"
                    type="text"
                    value={data?.status}
                    className="min-width-300"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        name="doNotCall"
                        defaultChecked={data?.doNotCall}
                      />
                    }
                    label="Não ligar"
                  />
                  <TextField
                    name="campaign"
                    label="Campanha"
                    type="text"
                    disabled
                    value={data?.campaign}
                    className="min-width-300"
                  />
                  <TextField
                    name="source"
                    label="Fonte"
                    type="text"
                    disabled
                    value={data?.source}
                    fullWidth={true}
                  />
                </Form>
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained" color="primary">
                  Salvar
                </Button>
              </CardActions>
            </Card>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Metas leadId={id} />
        </TabPanel>
      </Container>
    </Body>
  )
}

export default Lead
