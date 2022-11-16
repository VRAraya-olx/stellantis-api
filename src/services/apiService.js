'use strict'

const debug = require('debug')('stellantis-api:apiService')

class ApiService {
  // Singleton Pattern

  static build () {
    if (!this._apiServiceInstance) {
      this._apiServiceInstance = new ApiService()
      debug('Initialize Stellantis-API')
    }
    return this._apiServiceInstance
  }

  async debug () {
    debug('Debugging API')
  }
}

module.exports = ApiService
