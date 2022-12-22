// Dado el siguiente array, haz la media de 
// las notas de todos los examenes .reduce().


const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notaTotal = exams.reduce((acc, alumn) => {
    
      return (acc + alumn.score)/exams.length
   
     

}, 0);

var mostExpPilot = exams.reduce(function (acc, alumn) { 
    return (alumn.score + acc) / exams.lenght ? (alumn.score+acc) : acc }, 0);

    const notaTota = exams.reduce((acc, alumn) => acc + alumn.score, 0);

    console.log(notaTotal)
    console.log(mostExpPilot);