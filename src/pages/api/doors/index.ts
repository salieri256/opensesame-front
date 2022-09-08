import type { NextApiRequest, NextApiResponse } from 'next'

type DoorBase = {
  name: string
}

type Door = {
  id: number
  isLocked: boolean
} & DoorBase

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Door[]>
) => {
  res.status(200).json([
    {
      id: 1,
      isLocked: true,
      name: 'Door 1',
    }
  ])
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Door>
) => {
  res.status(201).json({
    id: 1,
    isLocked: false,
    name: 'Door 1',
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Door | Door[]>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'POST') {
    postHandler(req, res)
  }
}

export default handler
