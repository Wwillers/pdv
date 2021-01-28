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

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const user = await User.find(id)
    return response.json(user)
  }
  //Método será deletado posteriormente, apenas para fins didáticos.
  public async delete({ auth, response }: HttpContextContract) {
    const id = auth.user?.id
    const user = await User.findOrFail(id)
    await user.delete()
    return response.status(204)
  }

  public async deleteUsers({ params, response }: HttpContextContract) {
    const { id } = params
    const user = await User.findOrFail(id)
    await user.delete()
    return response.json(204)
  }

  public async update({ auth, request, response }: HttpContextContract) {
    const id = auth.user?.id
    const data = request.only(['name', 'lastname', 'email', 'age', 'password'])
    const user = await User.findOrFail(id)
    user.name = data.name || user.name
    user.lastname = data.lastname || user.lastname
    user.email = data.email || user.email
    user.age = data.age || user.age
    user.password = data.password || user.password

    await user.save()

    return response.status(200).json(user)
  }
}
