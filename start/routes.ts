/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])
router.post('/users', [UsersController, 'create'])
router.patch('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'delete'])
