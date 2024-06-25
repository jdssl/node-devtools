const { Express, Router } = require('express');
const { readdirSync } = require('fs');
const { join } = require('path');

/**
 * Configura as rotas dinâmicas para a aplicação Express.
 * @param {Express} app - Instância da aplicação Express.
 * @returns {void}
 */
const setupRoutes = (app) => {
  const router = Router();
  const prefix = '/api';

  app.use(prefix, router);

  const routesPath = join(__dirname, '/../routes');

  readdirSync(routesPath).map(async (file) => {
    if (!file.endsWith('.map')) {
      /**
       * Importa e configura uma rota dinâmica.
       * @async
       * @function
       * @param {Router} router - Instância do roteador do Express.
       * @returns {Promise<void>}
       */
      (await import(`../routes/${file}`)).default(router);
    }
  });
};

module.exports = setupRoutes
