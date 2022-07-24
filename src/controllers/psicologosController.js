const { Psicologos } = require('../models');
const bcrypt = require ('bcryptjs');

const psicologosController = {
    async listarPsicologos (req, res){
        const listaDePsicologos = await Psicologos.findAll();
        res.status(200).json(listaDePsicologos);
    },
    async listarPsicologo (req, res){
        try{
        const { id } = req.params;
        const listarPsicologo = await Psicologos.findOne({
            where:{
                id:id,
            }
        });
        res.status(200).json(listarPsicologo);
        }
        catch(error)
            {return res.status(404).json('ID não encontrado');}
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
        res.status(201).json(novoPsicologo);
    },
    async atualizarPsicologos (req, res){
        const { id } = req.params;
        const { nome, apresentacao, email, senha } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
        const psicologoEncontrado = await Psicologos.findOne({where: {id}});
        psicologoEncontrado.update({ 
            nome,
            apresentacao,
            email,
            senha:newSenha, 
        });
        res.status(200).json(psicologoEncontrado);
    },
   
    async deletarPsicologos (req, res){
        const { id } = req.params;
        const delPsicologo = await Psicologos.findOne({where: {id}})
        if(!delPsicologo){
            res.status(404).json('ID não encontrado!')
        }
        else{
            await Psicologos.destroy({where:{id}});
            res.status(204).end();   
        }
    },
};

module.exports = psicologosController;