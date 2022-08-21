import type { NextApiRequest, NextApiResponse } from 'next'

type AsyncNextApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

export function apiHandler(handler: AsyncNextApiHandler): AsyncNextApiHandler {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}