/**
 * Middleware que define o tipo de conteúdo da resposta como JSON.
 * @param {import('express').Request} request - Objeto de requisição do Express.
 * @param {import('express').Response} response - Objeto de resposta do Express.
 * @param {import('express').NextFunction} next - Função de próximo middleware.
 * @returns {void}
 */
const contentType = (_request, response, next) => {
  response.type('json');
  next();
};

module.exports = contentType
