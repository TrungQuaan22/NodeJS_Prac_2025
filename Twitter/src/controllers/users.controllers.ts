import { Request, Response } from 'express'
const loginController = (req: Request, res: Response) => {
  res.json({ message: 'Login successful!' })
}
export { loginController }
