const userService = require('../services/userService').build()

async function findAllUsers() {
    return await userService.findAll()
}

async function createUser(user) {
    return await userService.create(user)
}

async function deleteUser(id) {
    return await userService.delete(id)
}

module.exports = {
    findAllUsers,
    createUser,
    deleteUser
}