import type { NextApiRequest, NextApiResponse } from 'next'

type UserBase = {
  name: string
  nfcId: string
}

type User = {
  id: number
  isActive: boolean
} & UserBase

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<User>
) => {
  res.status(200).json({
    id: 1,
    isActive: false,
    name: 'User',
    nfcId: '0123456789abcdef',
  })
}

const putHandler = (
  req: NextApiRequest,
  res: NextApiResponse<User>
) => {
  res.status(200).json({
    id: 1,
    isActive: false,
    name: 'User',
    nfcId: '0123456789abcdef',
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
  res: NextApiResponse<null | User>
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
