var shopper = {
    name: "Michael",
    price: 106.77,
    vegetarian: false,
    isVegetarian: function() {
        return this.name + " is not vegetarian and spent $" + this.price;
    },
    groceryCart: ["beans", "rice", "corn", "chicken"]
};