export type UserBase = {
  name: string
  nfcId: string
}

export type User = {
  id: number
  isActive: boolean
} & UserBase