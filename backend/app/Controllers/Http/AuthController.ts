import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async login({ auth, request, response }: HttpContextContract) {
		const { email, password } = request.all()
		const token = await auth.use('api').attempt(email, password)
		return response.status(201).json(token)
	}
}
