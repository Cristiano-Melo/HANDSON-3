const { Psicologos } = require('../models');
    const validaPsicologo = {
        async validaEmail( req, res,next ){
            const{ email } = req.body;
            const validaEmailPsicologo = await Psicologos.findOne({where:{email:email}});
            if (validaEmailPsicologo?.email == email){ 
            return res.status(404).json('email já cadastrado, favor inserir outro!');//retornar status
            };
            next();      
        },
        async validaEmailId( req, res, next ){
            const { email } = req.body;
            const { id } = req.params;
            const validaEmailID = await Psicologos.findOne({ where: {email}});
            if ( (validaEmailID?.email == email)&&( validaEmailID.id != id)){
                return res.status(404).json('email já cadastrado, favor inserir outro!');    //retornar status
            };
            next();
        },    
        async validaID( req, res, next ){
            const { id } = req.params;
            const validaIDPsicologo = await Psicologos.findOne({where:{id}});
            if (!validaIDPsicologo){
                return res.status(404).json('ID não encontado!')
            }
            next();
        }
}
module.exports = validaPsicologo;    