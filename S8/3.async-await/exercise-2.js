// Convierte la siguiente función con un fetch utilizando 
// async-await. Recuerda que para usar .fetch() 
// tendrás que probar el ejercicio en el navegador;


// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();
const getAllCharacters = async () => {
try {
        const getCharacters = await fetch('https://rickandmortyapi.com/api/character');
        const responseJson = await getCharacters.json();
        console.log(responseJson)
       // .then(characters => console.log(characters));
    }
    catch (err) {
console.log(err);
}
}

getAllCharacters();