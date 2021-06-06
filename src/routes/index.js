import express from 'express';

import {
    pingController,
    authController,
} from '../controllers';

import { authJwt } from '../middleware';

const router = express.Router();

//Ping route
router.get('/ping', [authJwt.verifyToken], pingController.getPing);

//Auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);

export {
    router
};