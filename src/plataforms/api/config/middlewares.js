const { bodyParser, cors, contentType } = require('../middlewares/index.js');

/**
 * Configura os middlewares no aplicativo Express.
 * @param {import('express').Express} app - Instância do aplicativo Express.
 */
const setupMiddleware = (app) => {
  app.use(bodyParser());
  app.use(cors());
  app.use(contentType());
}

module.exports = setupMiddleware
