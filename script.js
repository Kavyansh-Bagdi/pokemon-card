let data;
const array = {
    "normal": "#A8A77A",
    "fire": "#EE8130",
    "water": "#6390F0",
    "electric": "#F7D02C",
    "grass": "#7AC74C",
    "ice": "#96D9D6",
    "fighting": "#C22E28",
    "poison": "#A33EA1",
    "ground": "#E2BF65",
    "flying": "#A98FF3",
    "psychic": "#F95587",
    "bug": "#A6B91A",
    "rock": "#B6A136",
    "ghost": "#735797",
    "dragon": "#6F35FC",
    "dark": "#705746",
    "steel": "#B7B7CE",
    "fairy": "#D685AD"
};
async function fetchdata() {
    document.documentElement.style.setProperty('--v','hidden')
    let x = document.getElementById('name').value.toLowerCase();
    if (x !== "") {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
            if (!response.ok) {
                window.alert('Check Spelling');
                location.reload();
            } else {
                data = await response.json();  
                document.getElementById('pokemonimg').setAttribute('src', data.sprites.other.dream_world.front_default);
                document.getElementById('pokemonname').innerHTML = data.name.slice(0,1).toUpperCase() + data.name.slice(1);
                document.getElementById('hpvalue').innerHTML = data.stats[0].base_stat;
                document.getElementById('avalue').innerHTML = data.stats[1].base_stat;
                document.getElementById('dvalue').innerHTML = data.stats[2].base_stat;
                document.getElementById('svalue').innerHTML = data.stats[5].base_stat;
                document.getElementById('type').innerHTML = data.types[0].type.name;
                document.documentElement.style.setProperty('--color',array[data.types[0].type.name])
                setTimeout(document.documentElement.style.setProperty('--v', 'visible'), 1000);
            }
    }
    catch (error) {
        console.error(error);
    }
    } else {
         window.alert('Enter Name Of Pokemon');
   }
}