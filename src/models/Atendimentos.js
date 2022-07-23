const db = require ('../database');
const { DataTypes } = require('sequelize');
const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');

const Atendimentos = db.define(
    'Atendimentos',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        data_atendimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacao:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pacientes_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Pacientes,
                key: "id",
            }
        },
        psicologos_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Psicologos,
                key: "id",
            }
        },

    },
        {
            tableName: 'atendimentos',
        });
module.exports = Atendimentos;