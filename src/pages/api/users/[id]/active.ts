import type { NextApiRequest, NextApiResponse } from 'next'

type Active = {
  isActive: boolean
}

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Active>
) => {
  res.status(200).json({
    isActive: false,
  })
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Active>
) => {
  res.status(200).json({
    isActive: true,
  })
}

const deleteHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Active>
) => {
  res.status(200).json({
    isActive: false,
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Active>
) => {
  if (req.method === 'GET') {
    getHandler(req, res)
  }
  else if (req.method === 'PUT') {
    postHandler(req, res)
  }
  else if (req.method === 'DELETE') {
    deleteHandler(req, res)
  }
}

export default handler
