import React, { Component } from 'react';
import Superhero from './Superhero'
import list from './data.json'

class App extends Component {
  
  speak = (e) =>{
      alert(list.heroes[e].catchphrase)
  }
  render() {
    return (
      <div>
        {
          list.heroes.map((hero, id) =>
            <Superhero  name = {hero.name}
                        image = {hero.image}
                        catchphrase = {hero.catchphrase} 
                        speak = {this.speak}
                         id={id}/>
                        
          )}
      </div>
    );
  }
}

export default App;
