export type LockLogBase = {
  isLocked: boolean
  doorId: number
  userId: number
}

export type LockLog = {
  id: number
  unixTime: number
} & LockLogBase