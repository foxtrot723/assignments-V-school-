const axios = require('axios')

// 4 HTTP Verbs:

// Create: POST
// Read: GET
// Update: PUT
// Delete: DELETE


// GET
axios.get('https://swapi.co/api/people/').then(res =>
    console.log(res)
)

// POST
axios.post('https://swapi.co/api/people/', newObj).then(res =>
    console.log(res)
)

// PUT
axios.put('https://swapi.co/api/people/' + id, updatedObj).then(res =>
    console.log(res)
)

// DELETE
axios.delete('https://swapi.co/api/people/' + id).then(res =>
    console.log(res)
)