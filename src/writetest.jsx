const fetch = require('node-fetch')
const fs = require('fs')

async function read_pokemon_data() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/`) 
        .then(data => data.json())
        .then(data => {
            data=JSON.stringify(data)
            fs.writeFile('pokemon.txt', data, (err) => {})  
        })
        .catch(err => console.log(err))
}

read_pokemon_data(); 