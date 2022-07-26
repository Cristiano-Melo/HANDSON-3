const { Pacientes, Atendimentos } = require('../models');

const pacientesController = {
    async listarPacientes (req, res){
        const listaDePacientes = await Pacientes.findAll();
        return res.status(200).json(listaDePacientes);
    },
    async listarPaciente (req, res){
        const { id } = req.params;
        const listaDePaciente = await Pacientes.findOne({
            where:{ id, }   
        });
        return res.status(200).json(listaDePaciente);
    },
    async cadastrarPacientes(req, res){
        const{ nome, email, data_nascimento } = req.body;
        const novoPaciente = await Pacientes.create({
                nome,
                email,
                data_nascimento,            
            });
        return res.status(201).json(novoPaciente);
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
            return res.status(200).json(pacienteEncontrado);
    },
   
    async deletarPacientes (req, res){
        const { id } = req.params;
        const delPaciente = await Pacientes.findOne({where: {id}});
        const VerificaFK = await Atendimentos.findOne({where: {psicologos_id:id}});
        if(VerificaFK?.pacientes_id == id){
            return res.status(404).json('O Paciente já possui um atendimento, portanto não pode ser excluído');
        };
        if(!delPaciente){
            return res.status(404).json('ID não encontrado!')
        }
        else{
            await Pacientes.destroy({where:{id}});
            return res.status(204).end();   
        }
    },
};

module.exports = pacientesController;