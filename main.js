'use strict'

// Goal of the app
// Find your starting team
// When the "let your journey begin" button is clicked it will generate 6 random
// pokemon from the original 150 in the Kanto pokedex
// The second fetch should give you a skillset

// Connection test. The string should load in the online terminal if connected.
console.log('Success! main.js is now connected')

let pokePromise = window.fetch("https://pokeapi.co/api/v2/pokemon/?limit=150&offset=6");
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

// ***Comprehension check: What is json? json, or JavaScript Object Notation is what FORMATS information
// from the server to the webpage in a way that is readable for JavaScript. If API is the means of how we
// request things from the server, then json is what makes that data from our server readable to JS***

});

console.log('after fetch call')

jsonPromise.then(function(json){
    console.log('retrieving the actual payload', json);
    process(json.results)
})
//  we have now recieved our actual payload or data, and it his been logged
//  we use dot notation to specifically extract the results arrays out of the payload

function process(pokeBall){
// We're going to use this function to process and place our pokemon payload

        let ul = document.getElementById("Pokemon")

// Creating an li element in the js file and appending it to the li on the HTML
// This will create the link to from the payload to the HTML but we still need a 
// Vehichle or means to get us there.
        let li = document.createElement("li")
        ul.appendChild(li)

// If the code above is our link or passageway, then the code below is our vehicle
// to get information from the JS to the HTML 


// The same process will be repeated for our Pokemon names 
        let name = document.createElement("name")
        ul.appendChild(name)

// The code below will be the vehichle to drive the the names to the HTML
// We've created a variable acesses the names arrays in the results
        let pokeNames = 

// Now it's time to access the inner text of the name drive and place our pokemon
// names there
        name.innerText = pokeNames;

// *** Recap: 1.) Created an element called name. 2.) Appended that elemennt to the HTML
// 3.) Created a variable called pokeNames to acces the pokemon names.
// 4.) placed our pokeNames variable in the inner text of our name element.

// Now we are going to give the button a purpose. First we are going to grab our
// pokePromise which initializes the fetching from our API 
document.getElementById("starter").addEventListener("click",function () {
    pokePromise
})
}






