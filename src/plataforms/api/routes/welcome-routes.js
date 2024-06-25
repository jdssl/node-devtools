/**
 * Define rotas para o endpoint '/welcome'.
 * @param {import('express').Router} router - Objeto de roteador do Express.
 * @returns {void}
 */
module.exports = (router) => {
  router.get('/welcome', (_req, res) => {
    /**
     * Rota GET para '/welcome'.
     * @name GET/welcome
     * @function
     * @memberof module:routes
     * @inner
     * @param {import('express').Request} req - Objeto de requisição do Express.
     * @param {import('express').Response} res - Objeto de resposta do Express.
     * @returns {Object} - Retorna um objeto JSON com a mensagem de boas-vindas.
     */
    res.status(200).json({ message: 'Welcome' });
  });
};
