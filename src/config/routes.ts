import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  const prefix = '/api'
  app.use(prefix, router)
  fg
    .sync('**/src/routes/**routes.ts')
    .map(async file => (await import(`../../${file}`)).default(router))
}
