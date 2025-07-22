const express = require('express')
const {
	httpGetAllLaunches,
	httpAddNewLaunch,
	httpAbortLaunch
} = require('./launches.controller')

const launchesRouter = express.Router()

// the app.js and api.js files will centralize the routes (api.js) and versioning (app.js)
launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)
launchesRouter.delete('/:id', httpAbortLaunch)

module.exports = launchesRouter
