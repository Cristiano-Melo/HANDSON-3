const { Atendimentos } = require('../models');
    
const ValidaAtendimento = {
    async ValidaID( req, res, next ){
        const { id } = req.params;
        const ValidaIDAtendimento = await Atendimentos.findOne({where:{id}});
        if (!ValidaIDAtendimento){
            return res.status(404).json('ID não encontado!')
        }
    next();
    }
};

module.exports = ValidaAtendimento;
