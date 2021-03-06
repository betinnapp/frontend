/* eslint consistent-return:0 import/order:0 */

const express = require('express')
const logger = require('./logger')

const argv = require('./argv')
const port = require('./port')
const setup = require('./middlewares/frontendMiddleware')
const isDev = process.env.NODE_ENV !== 'production'
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false
const { resolve } = require('path')
const app = express()

const mix = (req, res, success, failure = 'ERROR') => {
  const random = Math.floor(Math.random() * 2)
  if (random === 0) {
    res.status(200).json(success)
  } else {
    res.status(500).json(failure)
  }
}

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
const api = express()

api.use((req, res, next) => {
  res.set('REQUEST-ID', Math.random())
  next()
})

app.use(api) // Backend mock middleware

// API JSON responses
const loginResponse = require('./data/login')
const modulesReponse = require('./data/modules')
const moduleDetails = require('./data/moduleDetails')
const submodule = require('./data/submodule')
const userDetails = require('./data/userDetails')
const survey = require('./data/survey')
const investmentTypes = require('./data/investmentTypes')
const goalsList = require('./data/goalsList')
const goalDetails = require('./data/goalDetails')

api.post('/auth/login', (req, res) => {
  res.json(loginResponse)
})

api.post('/user/', (req, res) => {
  res.json(loginResponse)
})

api.get('/user/me', (req, res) => {
  res.json(userDetails)
})

api.put('/user/me', (req, res) => {
  res.json(userDetails)
})

api.get('/module/list', (req, res) => {
  // mix(req, res, modulesReponse)
  res.json(modulesReponse)
})

api.get('/module/quick-access', (req, res) => {
  res.json(modulesReponse)
})

api.get('/module/coin', (req, res) => {
  res.status(200).send({
    coin: 500,
  })
})

api.get('/module/:moduleId', (req, res) => {
  res.json(moduleDetails)
})

api.get('/module/:moduleId/submodule/:submoduleId', (req, res) => {
  res.json(submodule)
})

api.post('/module/:moduleId/submodule/:submoduleId/completed', (req, res) => {
  res.status(200).send({ status: 'ok' })
})

api.get('/surveys/:surveyId', (req, res) => {
  res.json(survey)
})

api.post('/questions/:questionId:answer', (req, res) => {
  res.status(200).send({ status: 'ok' })
})

api.get('/goal/types', (req, res) => {
  res.json(investmentTypes)
})

api.post('/goal', (req, res) => {
  mix(req, res, { status: 'ok' })
})

api.get('/goal/list', (req, res) => {
  res.json(goalsList)
})

api.get('/goal/:goalId', (req, res) => {
  res.json(goalDetails)
})

api.put('/goal/:goalId/deposit', (req, res) => {
  res.status(200).send({ status: 'ok' })
})

api.delete('/goal/:goalId', (req, res) => {
  res.status(200).send({ status: 'ok' })
})

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
})

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST
const host = customHost || null // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost'

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz' // eslint-disable-line
  res.set('Content-Encoding', 'gzip')
  next()
})

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message)
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url
    try {
      url = await ngrok.connect(port)
    } catch (e) {
      return logger.error(e)
    }
    logger.appStarted(port, prettyHost, url)
  } else {
    logger.appStarted(port, prettyHost)
  }
})
