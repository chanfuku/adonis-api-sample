// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  index() {
    return [
      {
        id: 1,
        username: '麻生太郎',
      },
      {
        id: 2,
        username: '大谷翔平',
      },
    ]
  }
}
