// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(`{
  "notes": [
    {
      "id": 1,
      "name": "Pick up groceries",
      "note": "Pick up groceries today, before 7 pm.  Aldis in Latrobe.",
      "date": "05/01/2032",
      "category": "Personal"
    },
    {
      "id": 2,
      "name": "30 x 30 - Day 6",
      "note": "Finish Day 6 exercise for 30 x 30.",
      "date": "05/01/2032",
      "category": "Work"
    }
  ]
}`)
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
