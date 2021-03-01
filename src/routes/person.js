import express from 'express';
import {
  getPerson, updatePerson, deletePerson, createPerson,
} from '../controllers/person';

const Router = express.Router();

Router.get('/', getPerson);
Router.post('/', createPerson);
Router.put('/:id', updatePerson);
Router.delete('/:id', deletePerson);

export default Router;
