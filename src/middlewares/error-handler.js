import httpStatus from 'http-status';

import PersistenceError from '../utils/errors/persistence';

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 */
export default function errorHandler(err, req, res) {
  if (err.errors && err.errors.length > 0) {
    const error = err.errors.pop();

    res.status(httpStatus.BAD_REQUEST).json({
      error: error.msg,
      options: error.param,
    });
  } else if (err instanceof PersistenceError) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.msgErr, err: err.err });
  } else {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
