import { type Request, type Response, type Router } from 'express'

export default (router: Router): void => {
  router.get('/welcome', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome' })
  })
}
