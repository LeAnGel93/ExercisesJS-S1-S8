// En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. 
// Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {
    title: 'The last of us 2',
    gender: ['action', 'zombie', 'survival'], 
    year: 2020}

   let {title, gender, year} = game;
   console.log(title, gender, year);


// let marvelCharacter = {
//         name: {
//             heroName: 'Doctor Strange',
//             humanName: 'Stephen Vincent Strange'
//         },
//         team: ['Avengers', 'Iluminati']
//     }
    
//     // Destructuring - Ex1
//     let { name, team } = marvelCharacter;
    
//     // Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
//     console.log(name.heroName, name.humanName);
//     console.log(team[0], team[1]);
    
//     // Destructuring - Ex2
//     let { heroName, humanName } = marvelCharacter.name;
    
//     console.log(heroName);
//     console.log(humanName);