/**
 * Rotas para a aplicação
 */

 const express = require('express');
 const OngController = require('./controllers/OngController');
 const IncidentController = require('./controllers/IncidentController');
 const ProfileController = require('./controllers/ProfileController');
 const SessionController = require('./controllers/SessionController');

 const routes = express.Router();

 /**
  * MÉTODOS HTTP:
  * 
  * GET: buscar uma informação do back-end;
  * POST: Criar  uma informação no back-end;
  * PUT: Alterar uma informação no back-end;
  * DELETE: Deletar uma informação do back-end.
  */

 /**
  * TIPO DE PARÂMETROS:
  * 
  * Query Params(?): Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
  * Route Params: Parâmetros utilizados para  identificar um único recurso;
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
  */

 /**PARA LISTAR E CRIAR ONGs */
 routes.get('/ongs', OngController.index);
 routes.post('/ongs', OngController.create);

 /**PARA LISTAR E CRIAR CASOS */
 routes.get('/incidents', IncidentController.index);
 routes.post('/incidents', IncidentController.create);

 /**PARA DELETAR UM CASO */
 routes.delete('/incidents/:id', IncidentController.delete);

 /**PARA LISTAGEM DE CASOS DE UMA ONG (ID) ESPECÍFICA*/
 routes.get('/profile', ProfileController.index);

 /**PARA CRIAR UMA SEÇÃO (LOGIN) */
 routes.post('/sessions', SessionController.create);


module.exports = routes;