const { Atendimentos } = require('../models');
    
const validaAtendimento = {
    async validaID( req, res, next ){
        const { id } = req.params;
        const validaIDAtendimento = await Atendimentos.findOne({where:{id}});
        if (!validaIDAtendimento){
            return res.status(404).json('ID não encontado!')
        }
    next();
    }
};

module.exports = validaAtendimento;
