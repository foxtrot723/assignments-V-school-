const chessPlayers = {
    firstName: "Michael",
    lastName: "Olson",
    age: 21,
    favoriteOpenings: [
 
                {
                    title: "The Ruy Lopez",
                    players: ["Bobby Fischer", "Joe Kenoli"],
                    year: 1975,
                    variation:"exchange"
                },
                {
                    title: "The Ruy Lopez",
                    players: ["Tigran Petrosian", "Mikhail Botvanik"],
                    year: 1965,
                    variation:"exchange"
                },
                {
                    title: "The Ruy Lopez",
                    players: ["Magnus Carlsen", "Wesley So"],
                    year: 2018,
                    variation:"exchange"
                },
                {
                    title: "The Ruy Lopez",
                    players: ["Bobby Fischer", "Joe Kenoli"],
                    year: 1988,
                    variation:"advanced"
                },
                {
                    title: "The Ruy Lopez",
                    players: ["Tigran Petrosian", "Mikhail Botvanik"],
                    year: 1965,
                    variation:"advanced"
                },
                {
                    title: "The Ruy Lopez",
                    players: ["Magnus Carlsen", "Wesley So"],
                    year: 2018,
                    variation:"advanced"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Gary Kasparov", "Hikaru Nakamora"],
                    year: 1986,
                    variation:"advanced"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Tigran Petrosian", "Bobby Fischer"],
                    year: 1969,
                    variation:"advanced"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Magnus Carlsen", "Grishnund Anand"],
                    year: 2018,
                    variation:"advanced"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Anatoly Karpov", "Hikaru Nakamora"],
                    year: 2016,
                    variation:"exchange"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Tigran Petrosian", "Bobby Fischer"],
                    year: 1945,
                    variation:"exchange"
                },
                {
                    title: "The Maroczy Bind",
                    players: ["Jose Raul Capablanca", "Paul Morphy"],
                    year: 2018,
                    variation:"exchange"
                },
                {
                    title: "The Italian Game",   
                    players: ["Bobby Fischer", "Tigran Petrosian"],
                    year: 1962,
                    variation:"exchange"
                },
                {
                    title: "The Italian Game",
                    players: ["Mikhail Tal", "Mikhail Botvanik"],
                    year: 1959,
                    variation:"exchange"
                },
                {
                    title: "The Italian Game",
                    players: ["Magnus Carlsen", "Hikaru Nakamora"],
                    year: 2018,
                    variation:"exchange"
                },
                {
                    title: "The Italian Game",
                    players: ["Bobby Fischer", "Tigran Petrosian"],
                    year: 1943,
                    variation:"advanced"
                },
                {
                    title: "The Italian Game",
                    players: ["Mikhail Tal", "Bobby Fischer"],
                    year: 1939,
                    variation:"advanced"
                },
                {
                    title: "The Italian Game",
                    players: ["Magnus Carlsen", "Greshnand Anand"],
                    year: 2017,
                    variation:"advanced"
                }
    ],
        
    
    winners: ["Bobby Fischer", "Mikhail Botvanik", "Wesley So", "Bobby Fischer", "Tigran Petrosian", "Magnus Carlsen",
    "Gary Kasparov", "Bobby Fischer", "Grishnund Anand", "Anatoly Karpov", "Tigran Petrosian", "Jose Raul Capablanca", "Bobby Fischer",
    "Mikhail Botvanik", "Hikaru Nakamora", "Tigran Petrosian", "Mikhail Tal", "Greshnand Anand"],
    
    myChessFunc: function() {
        for (var i = 0; i < chessPlayers.winners.length; i++) {
            console.log("In the year " + chessPlayers.favoriteOpenings[i].year + ", " + chessPlayers.favoriteOpenings[i].players[0] + " played " + chessPlayers.favoriteOpenings[i].players[1] + " as black. " + chessPlayers.winners[i] + " was the winner, and the opening was " + chessPlayers.favoriteOpenings[i].title + ". It was the " + chessPlayers.favoriteOpenings[i].variation + " variation." )
        }
        
    }
}
chessPlayers.myChessFunc()
      
    



































        













