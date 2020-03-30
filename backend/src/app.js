const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());

/**
 * Informar o app (express) que estamos utilizando o JSON para as requisições.
 * Converte o JSON para JScript para o navegador entender.
 */

app.use(express.json());
app.use(routes);
app.use(errors());

   /**
    * BANCO DE DADOS:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * COMUNICAÇÃO COM BANCO DE DADOS:
     * 
     * Drive: SELECT * FROM users;
     * Query Builder: table('users').select('*').where()
     */



module.exports = app;


