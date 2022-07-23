const db = require ('../database');
const { DataTypes } = require('sequelize');

const Psicologos = db.define(
    'Psicologos',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        apresentacao:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
        {
            tableName: 'psicologos',
        });
module.exports = Psicologos;