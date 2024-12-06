import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { userValidator } from '#validators/user_validator'

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
    const payload = await userValidator.validate(request.all())
    return await User.create(payload)
  }

  async update({ params, request, response }: HttpContext) {
    const payload = await userValidator.validate(request.all())
    const user = await User.find(params.id)
    if (!user) {
      return response.safeStatus(404).send({
        status: 404,
        message: 'not found',
      })
    }
    user.firstName = payload.firstName
    user.lastName = payload.lastName
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
