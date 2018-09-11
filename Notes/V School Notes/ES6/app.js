// Object literals
const red = 'red'
const blue = 'blue'

const expense = {
    red, blue,
    type: 'business',
    amount: '$45 USD',
    value: '10',
    percent: '50%'
}



// Object destructuring

const {type, percent, value} = expense
console.log(percent)


const veggies = ['eggplant', 'cucumber', 'squash']

let [veggie1, veggie2] = veggies

console.log(veggie1)
console.log(veggie2)

// Rest and Spread operators
//  Rest operator (always in the function parameter)
const addNums = (num1, ...numbers) => console.log(numbers)
addNums(1, 2, 3, 4, 5)
//  Spread operator
const primary = ['red', 'green', 'blue']
const other = ['teal', 'cyan', 'magenta']

// primary.concat(other)
const colors = [...primary, 'doodlebob', ...other]
console.log(colors)


// obj functions

const buildPersonObj = (name, age) => ({ name, age })
const randomNumMaker = (num) => Math.floor(Math.random() * num)
const newPerson = buildPersonObj('Rick', 80)
console.log(newPerson)
