import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    const clients = await Client.all()
    return response.json(clients)
  }

  public async create({ request, response }: HttpContextContract) {
    const {
      name,
      lastname,
      email,
      cpforcnpj,
      type,
      phonenumber,
      address,
      creditquantity,
      status,
    } = request.all()

    const client = await Client.create({
      name,
      lastname,
      email,
      cpforcnpj,
      type,
      phonenumber,
      address,
      creditquantity,
      status,
    })

    return response.status(201).json(client)
  }

  public async store({}: HttpContextContract) {}

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const client = Client.find(id)
    return response.json(client)
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const {
      name,
      lastname,
      email,
      cpforcnpj,
      type,
      phonenumber,
      address,
      creditquantity,
      status,
    } = request.all()

    const client = await Client.findOrFail(id)
    client.name = name || client.name
    client.lastname = lastname || client.lastname
    client.email = email || client.email
    client.cpforcnpj = cpforcnpj || client.cpforcnpj
    client.type = type || client.type
    client.phonenumber = phonenumber || client.phonenumber
    client.address = address || client.address
    client.creditquantity = creditquantity || client.creditquantity
    client.status = status || client.status

    await client.save()

    return response.status(200).json(client)
  }

  public async updateCredit({ params, request, response }: HttpContextContract) {
    const { id } = params
    const data = request.only(['creditquantity', 'status'])
    const client = await Client.findOrFail(id)
    client.creditquantity = data.creditquantity || client.creditquantity
    client.status = data.status || client.status

    await client.save()

    return response.status(200).json(client)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params
    const client = await Client.findOrFail(id)
    await client.delete()

    return response.json(204)
  }
}
