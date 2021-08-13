import express from 'express';
const {validateRegistrationBody,validateLoginBody,Todovalidate,TodoId, validate} = require('./util/validation');
import authController from './controllers/auth.controller';
import passportMenager from './config/passport';
import todoController from './controllers/todo.controller';

export default function setRoutes(app) {

const router = express.Router();



router.post("/register", validateRegistrationBody(),validate, authController.register);
router.post("/login", validateLoginBody(), validate,authController.login);

router.route('/todo').post(passportMenager.authenticate,Todovalidate(),validate,todoController.create);
router.route('/todo/:id').get(passportMenager.authenticate,todoController.getById);
router.route('/todo/:id').put(passportMenager.authenticate,Todovalidate(),validate,todoController.put);
router.route('/todo/:id').delete(passportMenager.authenticate,todoController.delete);

app.use('/', router);
}