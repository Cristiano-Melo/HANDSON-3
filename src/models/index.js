const Psicologos = require('./Psicologos');
const Atendimentos = require('./Atendimentos');
const Pacientes = require('./Pacientes');

Atendimentos.belongsTo(Psicologos,{
    foreignKey: 'psicologos_id',
});
Psicologos.hasMany(Atendimentos,{
    foreignKey: 'psicologos_id',
});
Atendimentos.belongsTo(Pacientes,{
    foreignKey: 'pacientes_id',
});
Pacientes.hasMany(Atendimentos,{
    foreignKey: 'pacientes_id',
});

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos,
};