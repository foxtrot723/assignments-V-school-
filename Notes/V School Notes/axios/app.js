var axios = require('axios')
console.log()

axios.get("https://api.vschool.io/vlad/todo/").then(function(response) {
    console.log(response)
}).catch(function(error){
    console.log(error)
})
