const { Pacientes } = require('../models');
    const validaPaciente = {
        async validaEmail( req, res,next ){
            const{ email } = req.body;
            const validaEmailPaciente = await Pacientes.findOne({where:{email:email}});
            if (validaEmailPaciente?.email == email){ 
            return res.json('email já cadastrado, favor inserir outro!');       //retornar status
            };
            next();      
        },
        async validaEmailId( req, res, next ){
            const { email } = req.body;
            const { id } = req.params;
            const validaEmailID = await Pacientes.findOne({ where: {email}});
            if ( (validaEmailID?.email == email)&&( validaEmailID.id != id)){
                return res.json('email já cadastrado, favor inserir outro!');    //retornar status
            };
            next();
        },
        async validaID( req, res, next ){
            const { id } = req.params;
            const validaIDPaciente = await Pacientes.findOne({where:{id}});
            if (!validaIDPaciente){
                return res.status(404).json('ID não encontado!')
            }
            next();
        }
}
module.exports = validaPaciente;    
