import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
  const router = Router()
  const prefix = '/api'

  app.use(prefix, router)

  const routesPath = join(__dirname, '/../routes')

  readdirSync(routesPath).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
