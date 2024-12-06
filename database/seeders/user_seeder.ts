import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        first_name: '太郎',
        last_name: '佐藤',
      },
      {
        first_name: '次郎',
        last_name: '田中',
      },
    ])
  }
}
