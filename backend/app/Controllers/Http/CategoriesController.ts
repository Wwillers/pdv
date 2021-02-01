import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.all()

    return response.json(categories)
  }

  public async create({ request, response }: HttpContextContract) {
    const data = request.only(['name'])
    const category = await Category.create(data)

    return response.status(201).json(category)
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const category = await Category.find(id)

    return response.json(category)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const data = request.only(['name'])
    const category = await Category.findOrFail(id)
    category.name = data.name || category.name
    await category.save()

    return response.status(200).json(category)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params
    const category = await Category.findOrFail(id)
    await category.delete()

    return response.status(204)
  }
}
