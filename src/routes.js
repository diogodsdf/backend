const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

routes.delete('/devs/:id', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'apagar usuário'})
});

module.exports = routes;