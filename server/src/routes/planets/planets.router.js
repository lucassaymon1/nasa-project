const express = require('express')

const { httpGetAllPlanets } = require('./planets.controller')

const planetsRouter = express.Router()

// the app.js and api.js files will centralize the routes (api.js) and versioning (app.js)
planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter
