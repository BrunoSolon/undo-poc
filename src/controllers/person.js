import ErrorHandler from '../middlewares/error-handler';
import PersonService from '../services/person';

const getPerson = async (req, res) => {
  let result = null;

  try {
    result = await PersonService.getDbPerson();
  } catch (err) {
    return ErrorHandler(err, req, res);
  }

  return res.status(200).json({ status: 200, data: result });
};

const createPerson = async (req, res) => {
  const { body } = req;
  let result = null;

  try {
    result = await PersonService.createPerson(body);
  } catch (err) {
    return ErrorHandler(err, req, res);
  }

  return res.status(200).json({ status: 200, data: result });
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await PersonService.updatePerson(id, body);
  } catch (err) {
    return ErrorHandler(err, req, res);
  }

  return res.status(200).json();
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  const { excluded } = req.query;

  try {
    await PersonService.deletePerson(id, excluded);
  } catch (err) {
    return ErrorHandler(err, req, res);
  }

  return res.status(200).json();
};

export {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
