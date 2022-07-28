const express = require('express');
const routes = require('./routes');
const db = require('./database');

const app = express();

app.use(express.json());

app.use(routes);

(async()=>{await db.sync({alter:true});})();

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"));