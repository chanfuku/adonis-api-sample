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
}
