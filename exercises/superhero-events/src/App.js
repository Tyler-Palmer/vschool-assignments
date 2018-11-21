import React, { Component } from 'react';
import Superhero from './Superhero'
import list from './data.json'

class App extends Component {
  render() {
    return (
      <div>
        {
          list.heroes.map(hero =>
            <Superhero  name = {hero.name}
                        image = {hero.image}
                        catchphrase = {hero.catchphrase}/>
          )}
      </div>
    );
  }
}

export default App;
