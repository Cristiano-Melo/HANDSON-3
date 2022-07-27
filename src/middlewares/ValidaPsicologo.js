const { Psicologos } = require('../models');
    const ValidaPsicologo = {
        async ValidaEmail( req, res,next ){
            const{ nome, apresentacao, email, senha } = req.body;
            const validaEmailPsicologo = await Psicologos.findOne({where:{email:email}});
            if (validaEmailPsicologo?.email == email){ 
            return res.json('email já cadastrado, favor inserir outro!');
            };
            next();      
        },
        async ValidaEmailId( req, res, next ){
            const { email } = req.body;
            const { id } = req.params;
            const ValidaEmailID = await Psicologos.findOne({ where: {email}});
            if ( (ValidaEmailID?.email == email)&&( ValidaEmailID.id != id)){
                return res.json('email já cadastrado, favor inserir outro!');    
            };
            next();
        },    
        async ValidaID( req, res, next ){
            const { id } = req.params;
            const ValidaIDPsicologo = await Psicologos.findOne({where:{id}});
            if (!ValidaIDPsicologo){
                return res.status(404).json('ID não encontado!')
            }
            next();
        }
}
module.exports = ValidaPsicologo;    