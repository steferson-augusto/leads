import { LeadMeta } from './LeadMeta'
import { Person } from './Person'

export interface Lead {
  leadId: string
  assignedToId?: string
  name?: string
  doNotCall: boolean
  status?: string
  accountId: string
  campaign?: string
  source?: string
  createdAt: string
  updatedAt: string
  nullable: true
  assignedTo?: Person
  account?: Account
  leadMetas?: LeadMeta[]
}
