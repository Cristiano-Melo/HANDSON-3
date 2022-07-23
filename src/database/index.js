const Sequelize = require("sequelize");

const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'Christian28@';
const DB_CONFIG = {
    dialect:'mysql',
    host: 'localhost',
    port: 3306
};

//objeto para guardar a conexão com o banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch(error){
    console.log('Erro ao Conectar com o Banco de Dados');
}

async function hasConection(){
    try {
        await db.authenticate();
        console.log('Banco de Dados Conectado!');

    } catch (error){
        console.log('Não foi possível se conectar ao bando de dados!');
    }
}

Object.assign(db, {
    hasConection,
});
module.exports = db;