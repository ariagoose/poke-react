import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
    pokemon:[]
  }
  async componentDidMount(){
    var offset=0
    for(offset;offset<=1000;offset+=50){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`)
      const json = await response.json()
      for(let i=0;i<json.results.length;i++){
        let newpokemon= {name: json.results[i].name,
          id: offset+i+1
                        }
        this.setState({pokemon: this.state.pokemon.concat(newpokemon)})
      }
      
    }
  }
 
  render(){
    return (
      <div className="App">
      
      </div>
    )
  }
}

export default App


