const env = require('./config/env.js')
const express = require('express')
const setupMiddleware = require('./../api/config/middlewares')
const setupRoutes = require('./../api/config/routes')

const { PORT } = env;

(async () => {
  const app = express()

  setupMiddleware(app)
  setupRoutes(app)

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })

})().catch((err) => {
  console.log(`Unexpected error on run the project: ${err}`)
  process.abort()
})
