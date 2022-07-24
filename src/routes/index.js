const express = require('express');
const psicologosController = require('../controllers/psicologosController')
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');
const authController = require('../controllers/authController');
const usuarioCreateValidation = require('../validations/usuarios/create');
const authLoginValidation = require('../validations/auth/login');
const auth = require('../middlewares/auth');
const routes = express.Router();

routes.post('/login', authLoginValidation, authController.login);

routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id', psicologosController.listarPsicologo);
routes.post('/psicologos',usuarioCreateValidation ,psicologosController.cadastrarPsicologos);
routes.put('/psicologos/:id', psicologosController.atualizarPsicologos);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologos);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', pacientesController.listarPaciente);
routes.post('/pacientes', pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', pacientesController.atualizarPacientes);
routes.delete('/pacientes/:id', pacientesController.deletarPacientes);

routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.AtendimentoByID);
routes.post('/atendimentos', auth,atendimentosController.cadastrarAtendimento);



module.exports = routes;