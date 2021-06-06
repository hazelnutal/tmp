import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { usersRepository } from '../../repositories'
import { config } from '../../config/config';

const login = async (req, res) => {
    const reqUserName = req.body.user_name;

    const user = await usersRepository.getUserByUserName(reqUserName);
    console.log(user);
    if (!user) {
        return res.status(404).send({
            message: 'User not found.',
        });
    }

    const reqUserPassword = req.body.password;

    const isValidPassword = bcrypt.compareSync(reqUserPassword, user.password);
    if (!isValidPassword) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password."
        });
    }

    const token = jwt.sign({ id: user.id }, config.jwt.secret, {
        expiresIn: 86400,
    });

    return res.status(200).send({
        id: user.id,
        username: user.user_name,
        accessToken: token
    });
}

const register = async (req, res) => {
    const reqUserName = req.body.user_name;

    const user = await usersRepository.getUserByUserName(reqUserName);
    if (user) {
        return res.status(401).send({
            message: `User with name ${reqUserName} already exists.`,
        });
    }

    const userEncryptedPassword = bcrypt.hashSync(req.body.password, 8);

    await usersRepository.createUser(reqUserName, userEncryptedPassword);

    return res.status(200).send({ message: 'User was registered successfully!' });
}

export {
    login,
    register,
};