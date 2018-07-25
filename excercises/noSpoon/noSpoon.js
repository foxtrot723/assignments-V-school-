var monitor = {
    color: "black",
    size: 22,
    isElectric: true,
    purpose: function() {
        console.log("This is a function")
    }
};

var refridgerator = {
    color: "silver",
    size: 300,
    isElectric: true,
    purpose: function() {
        console.log("This is another function, " + monitor.size + " inches")
    }
};

var projector = {
    color: "gray",
    size: 20,
    isElectric: true,
    purpose: function() {
        return refridgerator.purpose;
    }
}

var passport = {
    color: "blue",
    size: 4,
    isElectric: false,
    purpose: function() {
        console.log("the passport is not " + projector.color + "!")
    }
};

var watch = {
    color: "silver",
    size: 3,
    isElectric: false,
    purpose: function() {
        console.log("This is the best day ever!!!! " + projector.isElectric)
    }
};

var phone = {
    color: "space-grey",
    size: 4,
    isElectric: false,
    purpose: function() {
        if (watch.color === refridgerator.color) {
            console.log ("I have " + (projector.size * passport.size) + " shoes.");
        } else {
            return null;
        }
    }
}

var chair = {
    color: "white",
    size: 50,
    isElectric: false,
    purpose: function() {
        console.log("this chair is " + this.size + " inches tall")
    }
};

var pen = {
    color: "black",
    size: 6,
    isElectric: false,
    purpose: function() {
        console.log("the " + this.color + " " + refridgerator + " is not " + projector.isElectric )
    }
};

var projector = {
    color: "gray",
    size: 20,
    isElectric: true,
    purpose: function() {

    }
};

var bottle = {
    color: "green",
    size: 6,
    isElectric: false,
    purpose: function() {

    }
};

