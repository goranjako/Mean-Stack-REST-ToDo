import express from 'express';
const {validateCustomersBody, validate} = require('./util/validation');


export default function setRoutes(app) {
const router = express.Router();






app.use('/', router);
}