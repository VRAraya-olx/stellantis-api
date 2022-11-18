'use strict'

const router = require('express').Router()
const UserController = require('../controllers/user')

router.get(
  '/by_id/:id',
  async function (req, res, next) {
    try {
      const { id } = req.params
      const users = await UserController.findOneById(id)
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/by_email/:email',
  async function (req, res, next) {
    try {
      const { email } = req.params
      const users = await UserController.findOneByEmail(email)
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/get_all',
  async function (req, res, next) {
    try {
      const users = await UserController.findAllUsers()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/get_all_deleted',
  async function (req, res, next) {
    try {
      const users = await UserController.findAllUsersDeleted()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/get_all_not_deleted',
  async function (req, res, next) {
    try {
      const users = await UserController.findAllUsersNotDeleted()
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
      const userCreated = await UserController.createUser(user)
      res.status(201).json(userCreated)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/update/:id',
  async function (req, res, next) {
    try {
      const { id } = req.params
      const changes = req.body
      const userUpdated = await UserController.updateUser(id, changes)
      res.status(201).json(userUpdated)
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
