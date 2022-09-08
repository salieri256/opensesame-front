import type { NextApiRequest, NextApiResponse } from 'next'

type ActivityLogBase = {
  isActive: boolean
  userId: number
}

type ActivityLog = {
  id: number
  unixTime: number
} & ActivityLogBase

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ActivityLog[]>
) => {
  res.status(200).json([
    {
      id: 1,
      unixTime: 0,
      isActive: true,
      userId: 1,
    }
  ])
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ActivityLog>
) => {
  res.status(201).json({
    id: 1,
    unixTime: 0,
    isActive: false,
    userId: 1,
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ActivityLog | ActivityLog[]>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'POST') {
    postHandler(req, res)
  }
}

export default handler
