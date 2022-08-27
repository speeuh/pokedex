export const loadPokemons = async (limit = 21, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error when fetch data: ", error);
    }
}

export const fetchPokemonData = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error when fetch data: ", error);
    }
}