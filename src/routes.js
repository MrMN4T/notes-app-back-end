const {
  addNoteHandler, getAllNoteHandler, getByIdHandler, editByIdHandler, deleteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteByIdHandler,
  },
];

module.exports = routes;
