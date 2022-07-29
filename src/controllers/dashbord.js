const { Atendimentos, Pacientes, Psicologos } = require('../models');

const dashboard = {

    async totalPacientes (req, res){
        const numeroPacientes = await Pacientes.findAndCountAll();
        return res.status(200).json(`O número total de pacientes é: ${numeroPacientes.count}`);
    },

    async totalPsicologos (req, res){
        const { count } = await Psicologos.findAndCountAll();
        return res.status(200).json(`O número total de psicologos é: ${count}`);
    },

    async totalAtendimentos (req, res){
        const { count } = await Atendimentos.findAndCountAll();
        return res.status(200).json(`O número total de atendimentos é: ${count}`);
    },

    async mediaTotal (req, res){
        const numPiscologos = await Psicologos.findAndCountAll();
        const numAtendimentos = await Atendimentos.findAndCountAll();
        return res.status(200).json(`A média de attendimentos para cada psicólogo é: ${numAtendimentos.count / numPiscologos.count}`);
    },
    
};

module.exports = dashboard;