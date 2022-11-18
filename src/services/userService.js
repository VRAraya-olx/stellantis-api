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
    const foundUsers = await prisma.user.findMany({})
    return foundUsers
  }

  async findById (id) {
    const foundUser = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })
    return foundUser
  }

  async findByEmail (email) {
    const foundUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return foundUser
  }

  async findAllNotDeleted () {
    const foundUsers = await prisma.user.findMany({
      where: {
        deleted_at: null
      }
    })
    return foundUsers
  }

  async findAllDeleted () {
    const foundUsers = await prisma.user.findMany({
      where: {
        NOT: {
          deleted_at: null
        }
      }
    })
    return foundUsers
  }

  async create (user) {
    const userCreated = await prisma.user.create({
      data: user
    })
    return userCreated
  }

  async update(id, changes) {
    const userUpdated = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: changes
    })
    return userUpdated
  }

  async delete (id) {
    const userDeleted = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
    return userDeleted
  }
}

module.exports = UserService
