import { Account } from './Account'

export interface Person {
  personId: string
  accountId: string
  referenceId?: string
  name?: string
  account?: Account
}
