import PersonModel from '../models/person';

export async function count(query) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.countDocuments(query);
  } catch (err) {
    throw err;
  }
}

// eslint-disable-next-line no-unused-vars
export async function find(query, opts = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.find(query);
  } catch (err) {
    throw err;
  }
}

export async function findOne(query, opts = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.findOne(query, '', opts);
  } catch (err) {
    throw err;
  }
}

export async function create(payload) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.create(payload);
  } catch (err) {
    throw err;
  }
}

export async function updateOne(query, payload) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.updateOne(query, payload);
  } catch (err) {
    throw err;
  }
}

export async function deleteOne(query) {
  // eslint-disable-next-line no-useless-catch
  try {
    return PersonModel.deleteOne(query);
  } catch (err) {
    throw err;
  }
}
