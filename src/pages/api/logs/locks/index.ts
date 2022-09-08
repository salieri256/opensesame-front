import type { NextApiRequest, NextApiResponse } from 'next'

type LockLogBase = {
  isLocked: boolean
  doorId: number
  userId: number
}

type LockLog = {
  id: number
  unixTime: number
} & LockLogBase

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<LockLog[]>
) => {
  res.status(200).json([
    {
      id: 1,
      unixTime: 0,
      isLocked: true,
      doorId: 1,
      userId: 1,
    }
  ])
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<LockLog>
) => {
  res.status(201).json({
    id: 1,
    unixTime: 0,
    isLocked: false,
    doorId: 1,
    userId: 1,
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<LockLog | LockLog[]>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'POST') {
    postHandler(req, res)
  }
}

export default handler
