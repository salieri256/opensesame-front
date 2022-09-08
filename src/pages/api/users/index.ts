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
  res: NextApiResponse<User[]>
) => {
  res.status(200).json([
    {
      id: 1,
      isActive: true,
      name: 'User 1',
      nfcId: '0123456789abcdef',
    }
  ])
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<User>
) => {
  res.status(201).json({
    id: 1,
    isActive: false,
    name: 'User 1',
    nfcId: '0123456789abcdef',
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<User | User[]>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'POST') {
    postHandler(req, res)
  }
}

export default handler
