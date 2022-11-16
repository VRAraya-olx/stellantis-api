'use strict'

const router = require('express').Router()

const ApiService = require('../services/apiService')
const UserController = require('../controllers/user')
// const validatorHandler = require('../middlewares/validator-handler')
// const schemas = require('../schemas/apiService')

router.get(
  '/get/',
  async function (req, res, next) {
    try {
      const apiService = await ApiService.build()
      await apiService.debug()
      res.status(200).json('OK')
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/delete/user/:id',
  async function (req, res, next) {
    try {
      const { id } = req.params
      console.log(id)
      const userDeleted = await UserController.deleteUser(id)
      res.status(201).json(userDeleted)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
