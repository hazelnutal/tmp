import { doctorsService } from '../../services';

const createDoctor = async (req, res, next) => {
    try {
        await doctorsService.createDoctor(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};

const getListOfDoctors = async (req, res, next) => {
    try {
        await doctorsService.getListOfDoctors(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};

export {
    createDoctor,
    getListOfDoctors,
};