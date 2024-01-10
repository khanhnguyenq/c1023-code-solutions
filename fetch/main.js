async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const users = await response.json();
      console.log(users);
    } else {
      throw Error(response.status);
    }
  } catch (err) {
    console.log(`Error code: ${err.message}`);
  }
}

getUsers();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (response.ok) {
      const pokemon = await response.json();
      console.log(pokemon);
    } else {
      throw Error(response.status);
    }
  } catch (err) {
    console.log(`Error code: ${err.message}`);
  }
}

getPokemon();
