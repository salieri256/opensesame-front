export type DoorBase = {
  name: string
}

export type Door = {
  id: number
  isLocked: boolean
} & DoorBase