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
  res: NextApiResponse<Door>
) => {
  res.status(200).json({
    id: 1,
    isLocked: false,
    name: 'Door',
  })
}

const putHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Door>
) => {
  res.status(200).json({
    id: 1,
    isLocked: false,
    name: 'Door',
  })
}

const deleteHandler = (
  req: NextApiRequest,
  res: NextApiResponse<null>
) => {
  res.status(204).end(null)
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<null | Door>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'PUT') {
    putHandler(req, res)
  }
  else if (req.method === 'DELETE') {
    deleteHandler(req, res)
  }
}

export default handler
