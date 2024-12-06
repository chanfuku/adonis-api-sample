import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index() {
    return await User.all()
  }

  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
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

  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    user.firstName = request.body().firstName
    user.lastName = request.body().lastName
    return await user.save()
  }

  async delete({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    try {
      await user.delete()
      return {
        message: 'User deleted successfully',
      }
    } catch (error) {
      return {
        message: 'Failed to delete user',
      }
    }
  }
}
