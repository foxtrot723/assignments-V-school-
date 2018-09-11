import React, { Component } from 'react';
import Super from './Super'
import superhero from './superhero.json'

class App extends Component {

  render() {
    const heroes = superhero.heroes
    const displayHeroes = heroes.map((hero, i) => {
      return <Super key = {hero.name + i}
                    name = {hero.name}
                    nickName = {hero.nickName}
                    nemesis = {hero.nemesis}
                    image = {hero.image}
                    catchPhrase = {hero.catchPhrase} />
    })
  
    return (
      <div>
        {displayHeroes}
      </div>
    )
  }
}

export default App;
