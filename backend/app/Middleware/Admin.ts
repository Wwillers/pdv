import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class Admin {
	public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
		const id = auth.user?.id
		const user = await User.findOrFail(id)
		if (user?.isadmin) {
			await next()
		} else {
			return response.status(401)
		}
	}
}
