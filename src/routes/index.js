import express from 'express';

import {
    pingController,
    authController,
    clinicsController,
} from '../controllers';

import { authJwt } from '../middleware';

const router = express.Router();

//Ping route
router.get('/ping', [authJwt.verifyToken], pingController.getPing);

//Auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);

//Clinics routes
router.post('/clinics', [authJwt.verifyToken], clinicsController.createClinic);
router.get('/clinics', [authJwt.verifyToken], clinicsController.getListOfClinics);

export {
    router
};