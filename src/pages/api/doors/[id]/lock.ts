import type { NextApiRequest, NextApiResponse } from 'next'

type Lock = {
  isLocked: boolean
}

const getHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Lock>
) => {
  res.status(200).json({
    isLocked: false,
  })
}

const postHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Lock>
) => {
  res.status(200).json({
    isLocked: true,
  })
}

const deleteHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Lock>
) => {
  res.status(200).json({
    isLocked: false,
  })
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Lock>
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
