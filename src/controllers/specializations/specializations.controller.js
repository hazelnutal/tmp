import { specializationsService } from '../../services';

const createSpecialization = async (req, res, next) => {
    try {
        await specializationsService.createSpecialization(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};

const getListOfSpecializations = async (req, res, next) => {
    try {
        await specializationsService.getListOfSpecializations(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};

export {
    createSpecialization,
    getListOfSpecializations,
};