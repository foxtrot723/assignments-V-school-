var peopleArr = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },{
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },
  ];

  var over18 = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
      },
      {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
      },
      {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
      },
      {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
      },
      {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
      },
  ]

  function olderThan18(people) {
    return people.filter(function(person) {
          return person.age > 18
    })
  }
  
 console.log(olderThan18(people))


  module.exports = {
      people:people,
      olderThan18: olderThan18,
      over18: over18
  }