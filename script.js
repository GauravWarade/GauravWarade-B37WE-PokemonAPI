console.log('You have connected...') // ability weight moves

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderEverything)

})

function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();
}

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
        console.log(pokeData)
    })
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    //let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types
    let pokeAbility = document.createElement('ul1')

    let pokeWeight = document.createElement('h4')
    pokeWeight.innerText = pokeData.weight;
    console.log(pokeWeight)

    // helper function to go through the types array and create li tags for each one
    createAbility(pokeData.abilities, pokeAbility)

    pokeContainer.append(pokeName, pokeNumber, pokeWeight, pokeAbility);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
    displayPagedata(pokeData);
    function displayPagedata(pokeData) {
        //select the table body using table-body id
        let tableBody = document.querySelector("#table-body");
        //clear the table body
        let tableRow = "";
        for (let paginationdata of pokeData) {
            tableRow += `
            <tr>
            <td>${paginationdata.name}</td>
            <td>${paginationdata.weight}</td>
            <td>${paginationdata.abilities}</td>
            </tr>
            `;
            tableBody.innerHTML = tableRow;
            console.log(`Hiii${paginationdata.name}`);
        }
    }
}
function createAbility(abilities, ul){
    abilities.forEach(function(ability){
        let abilityLi = document.createElement('li');
        abilityLi.innerText = ability['ability']['name'];
        ul.append(abilityLi)
    })
}


   