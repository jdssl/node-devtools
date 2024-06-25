/**
 * Middleware que configura cabeçalhos CORS para permitir qualquer origem, headers e métodos.
 * @param {import('express').Request} request - Objeto de requisição do Express.
 * @param {import('express').Response} response - Objeto de resposta do Express.
 * @param {import('express').NextFunction} next - Função de próximo middleware.
 * @returns {void}
 */
const cors = (_request, response, next) => {
  response.set('access-control-allow-origin', '*');
  response.set('access-control-allow-headers', '*');
  response.set('access-control-allow-methods', '*');
  next();
};

module.exports = cors
