'use strict'

const router = require('express').Router()
const UserController = require('../controllers/user')

router.get(
  '/getAll',
  async function (req, res, next) {
    try {
      const users = await UserController.findAllUsers()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/create/',
  async function (req, res, next) {
    try {
      const user = req.body
      console.log(user)
      const userCreated = await UserController.createUser(user)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/delete/:id',
  async function (req, res, next) {
    try {
      const { id } = req.params
      const userDeleted = await UserController.deleteUser(id)
      res.status(201).json(userDeleted)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
