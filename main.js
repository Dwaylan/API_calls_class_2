'use strict'

// Connection test. The string should load in the online terminal if connected.
console.log('Success! main.js is now connected')

let pokePromise = window.fetch("https://pokeapi.co/api/v2/pokemon/");
// fetch requires a request input. It is asking where you would like it to 
// fetch data from. We created a variable that requests data to be fetched from
// the random user API and holds it as a promise. Remember that when we use the promise
// method we are saying that when we retrieve our data we are PROMISING to do something
// with it. We are asking our program to fetch pokemon data from the pokeapi.


console.log('about to make a fetch call')
// should log if the step above this log  was successful

let jsonPromise = pokePromise.then(function(data){
    console.log ('fetch call is finished', data)
    return data.json()
// We have asked our program to fetch the json data of a non-specific amount of pokemon via 
// the pokeapi api and once it's fetched then we will console log a finished messege along 
// with the returned data. At his point the json data did not return the payload
// but the promise has been made

});

console.log('after fetch call')

// jsonPromise.then(function(json){
//     console.log('have an actual payload',json)
//     process(json.results)
// })

// This is a function to process the pokemon we received from our API
// function process(pokemon){
//     let table = document.getElementById('pokedex')

//     pokemon.forEach(function(pokemon){
//         console.log(pokemon.name)

//         let tr = document.createElement("tr")
//         table.appendChild(tr)

//         let td = document.createElement("td")
//         table.appendChild(td)
//     });
// }



// ***load pokemon to page with abilities first*** 
// Have player pick starter pokemon for battle and then go up against computer
// elemental weakness in the if statments 
// fire is weak to water but super-effective to grass etc. 



// jsonPromise.then(function(json){
//     console.log('have an actual payload', json);
//     Process(json.results)
// })