import { pingService } from '../services';

const getPing = async (req, res, next) => {
  try {
    res.status(200).json(await pingService.getPingStatus());

    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  };
};

export { getPing };