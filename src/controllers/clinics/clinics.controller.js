import { clinicsService } from '../../services';

const createClinic = async (req, res, next) => {
    try {
        await clinicsService.createClinic(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};

const getListOfClinics = async (req, res, next) => {
    try {
        await clinicsService.getListOfClinics(req, res);

        next();
    } catch (error) {
        console.log(error.message);
    	res.sendStatus(500) && next(error);
    }
};


export {
    createClinic,
    getListOfClinics,
};