import { pingService } from '../../services';

const getPing = async (req, res, next) => {
  	try {
		await pingService.getPingStatus(req, res);

    	next();
  	} catch(error) {
    	console.log(error.message);
    	res.sendStatus(500) && next(error);
  	};
};

export { getPing };