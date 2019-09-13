
// //this is referencing where to put the joke on the dom// 
// const jokeContainer = document.querySelector("#jokeDiv")

// this function is putting the joke on the dom //
let jokeWebComponent = (jokeObj) => {
    let newJoke =`
        <div>
        <p>${jokeObj.joke}
        </div>
            `
    return newJoke;
}

//this is creating a variable to hold information referenced of where you are putting it on the dom// 
let jokeResultsSection = document.querySelector("#jokeDiv")

/* this is a variable that is storing a fucntion that takes variable above that is where the information is 
going and putting it onto the dom */

let addJokeToDom = (newJoke) => {
    jokeResultsSection.innerHTML = newJoke;
}

/*this is function that calls the joke from api at the bottom you have to do parsedJokes.joke because 
when the api data returns you need to call specifically what you want from it*/

function findJoke () {
    fetch(`https://icanhazdadjoke.com/`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(jokes => jokes.json())
        .then(parsedJokes => {
            addJokeToDom(parsedJokes.joke);
            console.log(parsedJokes.joke)
            })
}

/*This is an event listener functions for when the button is clicked it is going to pass in the function that places 
the joke on the dom from the api. event.preventDefault stops the browser from performing normal behavior like refreshing the page automatically because
it thinks that it is submitting data etc */ 

document.querySelector("#btnGetJoke").addEventListener("click", event => { 
    event.preventDefault()
    findJoke()
})



