const express = require('express');
const psicologosController = require('../controllers/psicologosController')
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');
const authController = require('../controllers/authController');
const createPsicologo = require('../validations/usuarios/createPsicologo');
const createPaciente = require('../validations/usuarios/createPaciente');
const validaPsicologo = require ('../middlewares/validaPsicologo');
const validaPaciente = require('../middlewares/validaPaciente');
const validaAtendimento = require('../middlewares/validaAtendimento')
const authLoginValidation = require('../validations/auth/login');
const auth = require('../middlewares/auth');
const dashboardValues = require('../controllers/dashbord');
const routes = express.Router();

routes.post('/login', authLoginValidation, authController.login);

routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id',validaPsicologo.validaID, psicologosController.listarPsicologo);
routes.post('/psicologos',createPsicologo,validaPsicologo.validaEmail, psicologosController.cadastrarPsicologos);
routes.put('/psicologos/:id',validaPsicologo.validaID,createPsicologo,validaPsicologo.validaEmailId, psicologosController.atualizarPsicologos);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologos);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', validaPaciente.validaID, pacientesController.listarPaciente);
routes.post('/pacientes',createPaciente, validaPaciente.validaEmail, pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', validaPaciente.validaID,createPaciente,validaPaciente.validaEmailId, pacientesController.atualizarPacientes);
routes.delete('/pacientes/:id', pacientesController.deletarPacientes);

routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id',validaAtendimento.validaID, atendimentosController.atendimentoByID);
routes.post('/atendimentos', auth, atendimentosController.cadastrarAtendimento);

routes.get('/dashboard/totalpacientes', dashboardValues.totalPacientes);
routes.get('/dashboard/totalpsicologos', dashboardValues.totalPsicologos);
routes.get('/dashboard/totalatendimentos', dashboardValues.totalAtendimentos);
routes.get('/dashboard/media', dashboardValues.mediaTotal);


module.exports = routes;