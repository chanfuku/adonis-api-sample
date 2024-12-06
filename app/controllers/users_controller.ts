import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index() {
    return await User.all()
  }

  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    if (!user) {
      return response.safeStatus(404).send({
        status: 404,
        message: 'not found',
      })
    }
    return {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    }
  }

  async create({ request }: HttpContext) {
    return await User.create({
      firstName: request.body().firstName,
      lastName: request.body().lastName,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const user = await User.find(params.id)
    if (!user) {
      return response.safeStatus(404).send({
        status: 404,
        message: 'not found',
      })
    }
    user.firstName = request.body().firstName
    user.lastName = request.body().lastName
    return await user.save()
  }

  async delete({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    if (!user) {
      return response.safeStatus(404).send({
        status: 404,
        message: 'not found',
      })
    }

    try {
      await user.delete()
      return {
        status: 200,
        message: 'User deleted successfully',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 500,
        message: 'Failed to delete user',
      }
    }
  }
}
