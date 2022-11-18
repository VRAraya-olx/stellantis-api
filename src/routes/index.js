'use strict'

const router = require('express').Router()

const ApiService = require('../services/apiService')
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

module.exports = router
