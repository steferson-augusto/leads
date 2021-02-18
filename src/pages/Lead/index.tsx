/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent } from 'react'
import { useParams } from 'react-router-dom'
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
  Tab,
  Box
} from '@material-ui/core'

import { useSwr } from '../../hooks/useSwr'
import { Lead as LeadInterface } from '../../models/Lead'
import { Container, Form, Body } from './styles'
import Metas from '../../components/Metas'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}
interface ParamsProps {
  id: string
}

const Lead: React.FC = () => {
  const { id } = useParams<ParamsProps>()
  const { data, loading } = useSwr<LeadInterface>(`/Leads/${id}`)
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue)
  }

  if (loading) return <p>Carregando...</p>

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as any
    const values = {
      leadId: id,
      name: form.name.value,
      status: form.status.value,
      doNotCall: form.doNotCall.checked
    }
    console.log(values)
  }

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
          <Tab label="Item Three" />
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
                        value={data?.doNotCall}
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
