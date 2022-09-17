import { useEffect } from "react";

useEffect(() => {
    setIsLoading(true);
    getCharacters()
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
}, []);

export const getCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        return response.json();
    } catch {
        throw new Error('could not fetch the default price');
    }
};
