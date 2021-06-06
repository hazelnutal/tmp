import { databaseService } from '../../services'

const createUser = async (userName, password) => {
    await databaseService.query(`INSERT INTO users SET user_name = ?, password = ?`, [userName, password]);
}

const getUserByUserName = async (userName) => {
    const user = await databaseService.query(`SELECT * FROM users WHERE user_name = ? LIMIT 1`, [userName]);

    return user[0];
}

export {
    getUserByUserName,
    createUser,
}