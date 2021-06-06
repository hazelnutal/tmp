import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { databaseService } from '../index';
import { config } from '../../config/config';

const login = async (req, res) => {
    const reqUserName = req.body.user_name;

    const user = await databaseService.query(`SELECT * FROM users WHERE user_name = ? LIMIT 1`, [reqUserName]);
    if (!user || !user.length) {
        return res.status(404).send({
            message: 'User not found.',
        });
    }

    const reqUserPassword = req.body.password;

    const isValidPassword = bcrypt.compareSync(reqUserPassword, user[0].password);
    if (!isValidPassword) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password."
        });
    }

    const token = jwt.sign({ id: user[0].id }, config.jwt.secret, {
        expiresIn: 86400,
    });

    return res.status(200).send({
        id: user[0].id,
        username: user.user_name,
        accessToken: token
    });
}

const register = async (req, res) => {
    const reqUserName = req.body.user_name;

    const user = await databaseService.query(`SELECT * FROM users WHERE user_name = ? LIMIT 1`, [reqUserName]);
    if (user.length) {
        return res.status(401).send({
            message: `User with name ${reqUserName} already exists.`,
        });
    }

    const reqUserPassword = req.body.password;

    const userEncryptedPassword = bcrypt.hashSync(reqUserPassword, 8);

    await databaseService.query(`INSERT INTO users SET user_name = ?, password = ?`, [reqUserName, userEncryptedPassword]);

    return res.status(200).send({ message: 'User was registered successfully!' });
}

export {
    login,
    register,
};