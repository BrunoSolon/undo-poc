import * as PersonRepository from '../db/repository/person';
import PersistenceError from '../utils/errors/persistence';

export default class PersonService {
  static async getDbPerson(opts) {
    let find = null;
    let count = null;

    try {
      const promises = [
        PersonRepository.find({ excluded: false }, opts),
        PersonRepository.count({}),
      ];

      [find, count] = await Promise.all(promises);
    } catch (err) {
      throw new PersistenceError(err);
    }

    return { response: find, count };
  }

  static async createPerson(body) {
    let response = null;
    const { name, age, job } = body;

    try {
      response = await PersonRepository.create({ name, age, job });
    } catch (err) {
      throw new PersistenceError(err);
    }

    return response;
  }

  static async updatePerson(id, body) {
    let response = null;
    const { name, age, job } = body;

    try {
      response = await PersonRepository.updateOne({ _id: id }, { name, age, job });
    } catch (err) {
      throw new PersistenceError(err);
    }

    return response;
  }

  static async deletePerson(id, excluded = true) {
    let response = null;

    try {
      response = await PersonRepository.updateOne({ _id: id }, { excluded });
    } catch (err) {
      throw new PersistenceError(err);
    }

    return response;
  }
}
