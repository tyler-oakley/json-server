// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
/*
const router = jsonServer.router({
    "notes": [{
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
})
*/
const router = jsonServer.router({
  "songs": [
       {
      "id": 1,
      "name": "Smells Like Teen Spirit",
      "artistName": "Nirvana",
      "albumName": "Nevermind",
      "genre": "Rock"
    },
    {
      "id": 2,
      "name": "Thriller",
      "artistName": "Michael Jackson",
      "albumName": "Thriller",
      "genre": "Pop"
    },
    {
      "id": 3,
      "name": "Livin on a Prayer",
      "artistName": "Bon Jovi",
      "albumName": "Slippery When Wet",
      "genre": "Rock"
    },
    {
      "id": 4,
      "name": "Yeah!",
      "artistName": "Usher",
      "albumName": "Confessions",
      "genre": "Hip-hop"
    }
  ]
})
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
