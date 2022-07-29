const { Atendimentos, Pacientes, Psicologos } = require('../models');

const atendimentosController = {
    async listarAtendimentos(req, res){
        const listaDeAtendimentos = await Atendimentos.findAll({
        });
        return res.status(200).json(listaDeAtendimentos);
    },
    async atendimentoByID(req, res){
        const { id } = req.params;
        const atendimentoByID = await Atendimentos.findOne({where:{ id } });
        return res.status(200).json(atendimentoByID);
            
        },
    async cadastrarAtendimento (req, res){
        const{ } = req.body;
        const tokenHeader = req.auth.id;
        const novoAtendimento = await Atendimentos.create({
            psicologos_id:tokenHeader,
            ...req.body
        });
        return res.status(201).json(novoAtendimento);
    },
    };

module.exports = atendimentosController;