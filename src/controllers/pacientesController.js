const { Pacientes } = require('../models');

const pacientesController = {
    async listarPacientes (req, res){
        const listaDePacientes = await Pacientes.findAll();
        res.status(200).json(listaDePacientes);
    },
    async listarPaciente (req, res){
        try{
        const { id } = req.params;
        const listaDePaciente = await Pacientes.findOne({
            where:{
                id:id,
            }
        });
        res.status(200).json(listaDePaciente);
        }
        catch(error)
            {return res.status(404).json('ID não encontrado');}
    },
    async cadastrarPacientes(req, res){
        const{ nome, email, data_nascimento } = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            data_nascimento,            
        });
        res.status(201).json(novoPaciente);
    },
    async atualizarPacientes (req, res){
        const { id } = req.params;
        const { nome, email, data_nascimento } = req.body;
        const pacienteEncontrado = await Pacientes.findOne({where: {id}});
        pacienteEncontrado.update({ 
            nome,
            email,
            data_nascimento,
        });
        res.status(200).json(pacienteEncontrado);
    },
   
    async deletarPacientes (req, res){
        const { id } = req.params;
        const delPaciente = await Pacientes.findOne({where: {id}})
        if(!delPaciente){
            res.status(404).json('ID não encontrado!')
        }
        else{
            await Pacientes.destroy({where:{id}});
            res.status(204).end();   
        }
    },
};

module.exports = pacientesController;