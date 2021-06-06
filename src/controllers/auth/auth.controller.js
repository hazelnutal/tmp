import { authService } from '../../services';

const login = async (req, res, next) => {
    try {
        await authService.login(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
}

const register = async (req, res, next) => {
    try {
        await authService.register(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
}

export {
    login,
    register,
};