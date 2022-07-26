const db = require ('../database');
const { DataTypes } = require('sequelize');

const Psicologos = db.define(
    'Psicologos',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        apresentacao:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
            // unique: true,
        },
        senha: {
            type: DataTypes.STRING,
        },

    },
        {
            tableName: 'psicologos',
        });
module.exports = Psicologos;