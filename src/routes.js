// importar apenas o routes não o express inteiro
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello T-Rex Code' }));

export default routes;
