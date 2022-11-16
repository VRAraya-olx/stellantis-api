'use strict'

const debug = require('debug')('stellantis-api:userService')
const prisma = require('../../db/index')

class UserService {
  // Singleton Pattern

  static build () {
    if (!this._userServiceInstance) {
      this._userServiceInstance = new UserService()
      debug('Initialize UserService')
    }
    return this._userServiceInstance
  }

  async debug () {
    debug('Debugging API')
  }

  async findAll () {
    const findedUsers = await prisma.user.findMany({})
    return findedUsers
  }

  async findAllNotDeleted () {
    const findedUsers = await prisma.user.findAll({
      where: {
        created_at: null
      }
    })
    return findedUsers
  }

  async create (user) {
    const userCreated = await prisma.user.create({
      data: user
    })
    return userCreated
  }

  async delete (id) {
    const user = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
    return user
  }
}

module.exports = UserService
