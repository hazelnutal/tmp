import jwt from 'jsonwebtoken';

import { config } from '../../config/config';

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
  
    if (!token) {
      	return res.status(403).send({
        	message: 'No token provided',
      	});
    }
  
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
    	if (err) {
    		return res.status(401).send({
          		message: 'Unauthorized',
        	});
		}
		  
    	req.userId = decoded.id;

    	next();
    });
};

export { verifyToken };