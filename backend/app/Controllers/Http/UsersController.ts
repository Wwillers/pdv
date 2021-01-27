import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
	public async index({ response }: HttpContextContract) {
		const users = await User.all()
		return response.json(users)
	}

	public async create({ request, response }: HttpContextContract) {
		const data = request.only(['name', 'lastname', 'email', 'age', 'avatar', 'password', 'isadmin'])
		const user = await User.create(data)
		const returnUser = {
			id: user.id,
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			age: user.age,
			avatar: user.avatar,
		}
		return response.status(201).json(returnUser)
	}
}
