import app from './config/app'
import env from './config/env'

const { PORT } = env

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
