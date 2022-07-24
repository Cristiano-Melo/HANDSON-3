const { Atendimentos, Pacientes, Psicologos } = require('../models');

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
        const{ paciente_id, data_atendimento, observacao } = req.body;
        const tokenHeader = req.headers.authorization;
        var base64Url = tokenHeader.split('.')[1];
        console.log(base64Url);
        var decodedValue = JSON.parse(base64Url.decod);
        console.log(decodedValue);        
        const psic_id = req.user;
        console.log(psic_id);
        const psicologo_id = await psic_id.findOne({
            where:{
                id,
            }
        })
        console.log(psicologo_id);
        const novoAtendimento = await Atendimentos.create({
            psicologo_id,
            paciente_id,
            data_atendimento,
            observacao
        });
        res.status(201).json(novoAtendimento);
    },
    };

module.exports = atendimentosController;