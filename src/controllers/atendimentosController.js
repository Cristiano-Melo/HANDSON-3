const { Atendimentos, Pacientes, Psicologos } = require('../models');
const tokenHeader = require('express-jwt');

const atendimentosController = {
    async listarAtendimentos(req, res){
        const listaDeAtendimentos = await Atendimentos.findAll({
            include: Pacientes, 
            include: Psicologos
        });
        res.status(200).json(listaDeAtendimentos);
    },
    async AtendimentoByID(req, res){
        try{
            const { id } = req.params;
            const AtendimentoByID = await Atendimentos.findOne({
                where:{
                    id:id,
                }
            });
            res.status(200).json(AtendimentoByID);
            }
            catch(error)
                {return res.status(404).json('ID não encontrado');}
        },
    async cadastrarAtendimento (req, res){
        const{ pacientes_id, data_atendimento, observacao } = req.body;
        const tokenHeader = req.auth.id;
        const novoAtendimento = await Atendimentos.create({
            psicologos_id:tokenHeader,
            pacientes_id,
            data_atendimento,
            observacao
        });
        res.status(201).json(novoAtendimento);
    },
    };

module.exports = atendimentosController;