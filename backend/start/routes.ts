/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
	return { hello: 'world' }
})

//Users Routes
Route.get('users', 'UsersController.index')
Route.post('users', 'UsersController.create')
Route.get('users/:id', 'UsersController.show')
Route.delete('users', 'UsersController.delete').middleware('auth')
Route.delete('users/:id', 'UsersController.deleteUsers').middleware(['auth', 'admin'])
Route.post('users/edit', 'UsersController.update').middleware('auth')

//Authentication Routes
Route.post('/auth', 'AuthController.login')
