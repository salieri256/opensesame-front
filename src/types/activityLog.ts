export type ActivityLogBase = {
  isActive: boolean
  userId: number
}

export type ActivityLog = {
  id: number
  unixTime: number
} & ActivityLogBase