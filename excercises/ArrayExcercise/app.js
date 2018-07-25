var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

fruit.shift()

fruit.indexOf("orange")

fruit.push(fruit.indexOf("orange"))

console.log(vegetables.length)

vegetables.push(vegetables.length)

var food = fruit.concat(vegetables)

food.splice(4, 2)

food.reverse()

console.log(food.join())