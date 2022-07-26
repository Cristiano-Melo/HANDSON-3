const { Pacientes } = require('../models');
    const ValidaPaciente = {
        async ValidaEmail( req, res,next ){
            const{ nome, email, data_nascimento } = req.body;
            const validaEmailPaciente = await Pacientes.findOne({where:{email:email}});
            console.log(validaEmailPaciente);
            if (validaEmailPaciente?.email == email){ 
            return res.json('email já cadastrado, favor inserir outro!');
            };
            next();      
        },
        async ValidaID( req, res, next ){
            const { id } = req.params;
            const ValidaIDPaciente = await Pacientes.findOne({where:{id}});
            if (!ValidaIDPaciente){
                return res.status(404).json('ID não encontado!')
            }
            next();
        }
}
module.exports = ValidaPaciente;    
