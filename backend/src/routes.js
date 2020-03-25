const express = require('express');
const ongsController = require('./controllers/ongsController');
const incidentsController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

/**
 * Método HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: parâmetros nomeados enviados na rota depois de "?" e pode ter combinações com o simbolo "&". (Filtros, Paginações)
 * Route Params: parâmetros utilizados para identifacar um unico recurso ":"
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * Driver: Select * from users
 * Query Builder: table('users').select('*').where()
 */

routes.post('/sessions', sessionController.create); 

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;    