let search = document.querySelector("#searchIcon");
let pokemonImg = document.getElementById("pokemonImg");
let searchBar = document.getElementById("searchBar");
let namePokemon = document.getElementById("update_name");
let pokemonName = ["squirtle", "pikachu", "charmander", "bulbasaur"];
let type = document.getElementById("update_type");

let weight = document.getElementById("update_weight");
let height = document.getElementById("update_height");

let pokemonType = {
  squirtle: "Water",
  pikachu: "Electric",
  charmander: "Fire",
  bulbasaur: "Grass",
};
let pokemonWeight = {
  squirtle: "19.8 lbs",
  pikachu: "13.2 lbs",
  charmander: "18.7 lbs",
  bulbasaur: "15.2 lbs",
};
let pokemonHeight = {
  squirtle: `1' 08"`,
  pikachu: `1' 04"`,
  charmander: `2' 00"`,
  bulbasaur: `2' 04"`,
};

search.addEventListener("click", () => {
  let searchValue = searchBar.value.toLowerCase();

  if (pokemonName.includes(searchValue)) {
    // img change
    pokemonImg.src = `data/${searchValue}.png`;
    // name change
    namePokemon.innerHTML = searchValue;
    // type change
    let typeText = pokemonType[searchValue];
    type.textContent = typeText;
    // weight change
    let weightText = pokemonWeight[searchValue];
    weight.textContent = weightText;
    // height change
    let heightText = pokemonHeight[searchValue];
    height.textContent = heightText;
  } else {
    alert("Pokemon not found");
  }
});
