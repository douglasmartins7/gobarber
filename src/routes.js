import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Douglas Martins',
    email: 'douglas@trexcode.com.br',
    password_hash: '12346564',
  });

  return res.json(user);
});

export default routes;
