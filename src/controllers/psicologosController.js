const { Psicologos, Atendimentos } = require('../models');
const bcrypt = require ('bcryptjs');

const psicologosController = {
    async listarPsicologos (req, res){
        const listaDePsicologos = await Psicologos.findAll();
        return res.status(200).json(listaDePsicologos);
    },
    async listarPsicologo (req, res){
        const { id } = req.params;
        const listarPsicologo = await Psicologos.findOne({ where:{ id, } });
        return res.status(200).json(listarPsicologo)
    },
    async cadastrarPsicologos(req, res){
        const{ nome, apresentacao, email, senha } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologos.create({
            nome,
            apresentacao,
            email,
            senha:newSenha,            
        });
        return res.status(201).json(novoPsicologo);
    },
    async atualizarPsicologos (req, res){
        const { id } = req.params;
        const { senha } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
        const psicologoEncontrado = await Psicologos.findOne({where: {id}});
            psicologoEncontrado.update({
                ...req.body,
                senha:newSenha,            
            });
            return res.status(201).json(psicologoEncontrado);
        },   
    async deletarPsicologos (req, res){
        const { id } = req.params;
        const delPsicologo = await Psicologos.findOne({where: {id}});
        const VerificaFK = await Atendimentos.findOne({where: {psicologos_id:id}});
        if(VerificaFK?.psicologos_id == id){
            return res.status(404).json('O Psicologo já possui um atendimento, portanto não pode ser excluído');
        };
        if(!delPsicologo){
            return res.status(404).json('ID não encontrado!');
        }      
        else{
            await Psicologos.destroy({where:{id}});
            return res.status(204).end();   
        };
    },
};

module.exports = psicologosController;