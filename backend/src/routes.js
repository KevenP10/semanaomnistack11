/**
 * Rotas para a aplicação
 */

 const express = require('express');

 const { celebrate, Segments, Joi } = require('celebrate');

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
 routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

 /**PARA LISTAR E CRIAR CASOS */
 routes.get('/incidents',celebrate({
     [Segments.QUERY]: Joi.object().keys({
         page: Joi.number(),
     })
 }), IncidentController.index);


 routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().email(),
        value: Joi.number().required(),
    }),
 }), IncidentController.create);

 /**PARA DELETAR UM CASO */
 routes.delete('/incidents/:id', celebrate({
     [Segments.PARAMS]: Joi.object().keys({
         id: Joi.number().required(),
     })
 }), IncidentController.delete);

 /**PARA LISTAGEM DE CASOS DE UMA ONG (ID) ESPECÍFICA*/
 routes.get('/profile', celebrate({
     [Segments.HEADERS]: Joi.object({
         authorization: Joi.string().required(),
     }).unknown(),
 }), ProfileController.index);

 /**PARA CRIAR UMA SEÇÃO (LOGIN) */
 routes.post('/sessions', SessionController.create);


module.exports = routes;