const userService = require('../services/userService').build()

async function findOneById(id) {
    return await userService.findById(id)
}

async function findOneByEmail(email) {
    return await userService.findByEmail(email)
}

async function findAllUsers() {
    return await userService.findAll()
}

async function findAllUsersDeleted() {
    return await userService.findAllDeleted()
}

async function findAllUsersNotDeleted() {
    return await userService.findAllNotDeleted()
}

async function createUser(user) {
    return await userService.create(user)
}

async function updateUser(id, changes) {
    return await userService.update(id, changes)
}

async function deleteUser(id) {
    return await userService.delete(id)
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    findOneById,
    findAllUsers,
    findOneByEmail,
    findAllUsersDeleted,
    findAllUsersNotDeleted,
}