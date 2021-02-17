import { Person } from './Person'

export interface Account {
  accountId: string
  name?: string
  referenceId?: string
  people?: Person[]
}
