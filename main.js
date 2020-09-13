'use strict'

// Goal of the app
// Who's that Pokemon pokedex
// Have the user input a set list of parameters and return the pokemon in response
// It can be, number, type, or skill set 

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

jsonPromise.then(function(json){
    console.log('retrieving the actual payload', json);
    process(json.results)
})
//  we have now recieved our actual payload or data, and it his been logged

// This is a function to process the pokemon we received from our API
// function process(pokemon){
//     let table = document.getElementById('pokedex')

//     pokemon.forEach(function(pokemon){
//         console.log(pokemon.name)

//         let tr = document.createElement("tr")
//         table.appendChild(tr)

//         let td = document.createElement("td")
//         table.appendChild(td)

// This creates and image element and appends it to the HTML so we have a
// place to store our image files 
            // let img = document.createElement("img")
            // td.appendChild(img)

//  So we have something to hold the images, but now we need code to mediate
// and tell our images where to go.

            // let pokePics = 


//     });
// }







// jsonPromise.then(function(json){
//     console.log('have an actual payload', json);
//     Process(json.results)
// })