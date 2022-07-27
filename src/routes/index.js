const express = require('express');
const psicologosController = require('../controllers/psicologosController')
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');
const authController = require('../controllers/authController');
const createPsicologo = require('../validations/usuarios/createPsicologo');
const createPaciente = require('../validations/usuarios/createPaciente');
const ValidaPsicologo = require ('../middlewares/ValidaPsicologo');
const ValidaPaciente = require('../middlewares/ValidaPaciente');
const ValidaAtendimento = require('../middlewares/ValidaAtendimento')
const authLoginValidation = require('../validations/auth/login');
const auth = require('../middlewares/auth');
const { ValidaEmailId } = require('../middlewares/ValidaPaciente');
const routes = express.Router();

routes.post('/login', authLoginValidation, authController.login);

routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id',ValidaPsicologo.ValidaID, psicologosController.listarPsicologo);
routes.post('/psicologos',createPsicologo,ValidaPsicologo.ValidaEmail, psicologosController.cadastrarPsicologos);
routes.put('/psicologos/:id',ValidaPsicologo.ValidaID,createPsicologo,ValidaPsicologo.ValidaEmailId, psicologosController.atualizarPsicologos);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologos);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', ValidaPaciente.ValidaID, pacientesController.listarPaciente);
routes.post('/pacientes',createPaciente, ValidaPaciente.ValidaEmail, pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', ValidaPaciente.ValidaID,createPaciente,ValidaPaciente.ValidaEmailId, pacientesController.atualizarPacientes);
routes.delete('/pacientes/:id', pacientesController.deletarPacientes);

routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id',ValidaAtendimento.ValidaID, atendimentosController.AtendimentoByID);
routes.post('/atendimentos', auth, atendimentosController.cadastrarAtendimento);



module.exports = routes;