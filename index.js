
async function data_fetch(url){
        var res = await fetch(url) // promise-1
        return res.json() // promise -> creating a promise
}

getPokemon = async (id)=> {
    try{
    await data_fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((pokeCharacter)=> {
        console.log(pokeCharacter);
        console.log(pokeCharacter.id);
        console.log(pokeCharacter.name);
        console.log(pokeCharacter.weight);
        console.log(pokeCharacter.moves[0].move.name);
       // console.log(pokeCharacter.types[0].type.name);
        console.log(pokeCharacter.abilities[0].ability.name);
        console.log(pokeCharacter.moves[1].move.name);
       // console.log(pokeCharacter.types[1].type.name);
        console.log(pokeCharacter.abilities[1].ability.name);

        const containerDiv = document.createElement("div");
        containerDiv.className = 'card';
        containerDiv.id = 'card';

        const containerDivinnerHTML = `
                    
                    <h1 class= "title" id="pokemon-name">${pokeCharacter.name.toUpperCase()}</h1>
    <hr/>
                    <h1 class= "title" id="pokemon-id">${pokeCharacter.id}</h1>
                    
                <img class="pokemon-image" src="${pokeCharacter.sprites.front_shiny}" alt="${pokeCharacter.name}" >
                <div class="detail-info">Abilities :
                <ul class= "details">
                    <li>${pokeCharacter.abilities[0].ability.name}</li>
                    <li>${pokeCharacter.abilities[1].ability.name}</li>
                </ul>
                </div>
                <div class="detail-info">Moves :
                <ul class= "details">
                    <li>${pokeCharacter.moves[0].move.name}</li>
                    <li>${pokeCharacter.moves[1].move.name}</li>
                </ul>
                    </div>
                </div>
                <div class="detail-info">Weight : ${pokeCharacter.weight}
                </div>
                `
                containerDiv.innerHTML = containerDivinnerHTML;
                container.appendChild(containerDiv)

        })
    }
    catch(err){console.log("Error");}
    }
    for (let i = 1; i <= 50; i++){
                getPokemon(i);
            }
            
    


// getPokemon = async (id)=> {
//     try{
//     await data_fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then((pokeCharacter)=> {
//         // for(let i of pokeCharacter )    {
//         //     console.log(i[0]);
//         //   }                                 
//         console.log(pokeCharacter[0]);
//     })
//     }
//     catch(err){console.log("Error");}
//     }
//     for (let i = 1; i <= 10; i++){
//         getPokemon(i);
//     }
    