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
      "genre": "Hip-Hop"
    }
  ]
})
const router = jsonServer.router({
  "contacts": [
	{
	  "id": 1,
 	  "name": "Ed Gazdag",
      "email": "ed.gazdag@briebug.com",
   	  "phone": "724-433-2518",
  	  "phoneType": "Cell",
  	  "address": "3023 Ben Venue Dr",
  	  "city": "Greensburg",
  	  "state": "PA",
  	  "zip": "15601"
	},
	{
	  "id": 2,
 	  "name": "John Doe",
      "email": "john.doe@briebug.com",
   	  "phone": "724-555-1212",
  	  "phoneType": "Home",
  	  "address": "123 Main St",
  	  "city": "Greensburg",
  	  "state": "PA",
  	  "zip": "15601"
	},
	{
	  "id": 3,
 	  "name": "Jane Doe",
      "email": "jane.doe@briebug.com",
   	  "phone": "724-555-2121",
  	  "phoneType": "Cell",
  	  "address": "123 Main St",
  	  "city": "Greensburg",
  	  "state": "PA",
  	  "zip": "15601"
	},
	{
	  "id": 4,
 	  "name": "Bill Smith",
      "email": "bill.smith@briebug.com",
   	  "phone": "724-555-2929",
  	  "phoneType": "Work",
  	  "address": "345 First Ave",
  	  "city": "Greensburg",
  	  "state": "PA",
  	  "zip": "15601"
	},
  ]	
})*/

const router = jsonServer.router({
  "students": [
       {
      "name": "John Johnson",
      "year": "Sophomore",
      "grade": "B"
    },
    {
      "name": "Jack Jackson",
      "year": "Senior",
      "grade": "F"
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
