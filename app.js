const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()
basicAuth({users: { 'example': 'example' }, challenge: true, realm: 'example',})

const port = 8080

const preMessage = "<!DOCTYPE html>\n<html>\n<head>\n<title>HTTP test pages</title>\n</head>\n<body>\n"
const postMessage = "\n</body>\n</html>"
const subpage = ""

app.get('/', (req, res) => {
  var message = "<h1>HTTP code index page</h1>\n"
  message = message + "<h3>This is the example page for return code 200</h3>\n"
  message = message + "<p>For the full list, check out the Mozilla Developer Network documentation</p>\n"
  message = message + '<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</a></p>\n'
  message = message + '<p><a href="' + subpage + '/301">Redirect : code 301</a></p>\n'
  message = message + '<p><a href="' + subpage + '/400">Bad request : code 400</a></p>\n'
  message = message + '<p><a href="' + subpage + '/401">Unathorized : code 401</a></p>\n'
  message = message + '<p>(username and password to above is example)</p>\n'
  message = message + '<p><a href="' + subpage + '/403">Forbidden : code 403</a></p>\n'
  message = message + '<p><a href="' + subpage + '/404">Not found : code 404</a></p>\n'
  message = message + '<p><a href="' + subpage + '/418">I\'m a teapot : code 418 (easter egg, but valid)</a></p>\n'
  res.send(preMessage + message + postMessage)
})

app.get('/301', (req, res) => {
  res.redirect(301, subpage + '/')
})

app.get('/400', (req, res) => {
  var message = "<h1>Error Code 400</h1>\n"
  message = message + "<h3>Bad request</h3>\n"
  res.status(400);
  res.send(preMessage + message + postMessage)
})

app.get('/401', basicAuth({users: { 'example': 'example' }, challenge: true, realm: 'example',}) , (req, res) => {
  var message = "<h1>You've logged in</h1>\n"
  res.send(preMessage + message + postMessage)
})

app.get('/403', (req, res) => {
  var message = "<h1>Error Code 403</h1>\n"
  message = message + "<h3>Forbidden</h3>\n"
  res.status(403);
  res.send(preMessage + message + postMessage)
})

app.get('/404', (req, res) => {
  var message = "<h1>Error Code 404</h1>\n"
  message = message + "<h3>Not Found</h3>\n"
  res.status(404);
  res.send(preMessage + message + postMessage)
})

app.get('/418', (req, res) => {
  var message = "<h1>Error Code 418</h1>\n"
  message = message + "<h3>I'm a teapot</h3>\n"
  res.status(404);
  res.send(preMessage + message + postMessage)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
