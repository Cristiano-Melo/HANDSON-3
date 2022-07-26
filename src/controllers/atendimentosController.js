const { Atendimentos, Pacientes, Psicologos } = require('../models');

const atendimentosController = {
    async listarAtendimentos(req, res){
        const listaDeAtendimentos = await Atendimentos.findAll({
            include: Pacientes, 
            include: Psicologos
        });
        return res.status(200).json(listaDeAtendimentos);
    },
    async AtendimentoByID(req, res){
            const { id } = req.params;
            const AtendimentoByID = await Atendimentos.findOne({where:{ id } });
            if(!AtendimentoByID){
                return res.status(404).json('ID não encontrado').end();
            }
            else{
                return res.status(200).json(AtendimentoByID);};
            
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
        return res.status(201).json(novoAtendimento);
    },
    };

module.exports = atendimentosController;