import 'module-alias/register'
import app from './config/app'
import env from './config/env'

const { PORT } = env;

(async () => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
})().catch((err) => {
  console.log(`Unexpected error on run the project: ${err}`)
  process.abort()
})
