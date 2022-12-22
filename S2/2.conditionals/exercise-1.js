// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados 
// y añade la propiedad isApproved a true o false en consecuencia. 
// Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

// for (let i = 0; i < alumns.length; i++) {
//     let comprobacion = alumns[i]
//     console.log(alumns[i].T1)
//     if (alumns[i].T1 === true){}
//     if (alumns[i].T2 === true){}
//     if (alumns[i].T3 === true){}
// }

for (let i = 0; i < alumns.length; i++) {
    let numeroTrimestre = 0;

    alumns[i].T1 ? numeroTrimestre++ : numeroTrimestre;
    alumns[i].T2 ? numeroTrimestre++ : numeroTrimestre;
    alumns[i].T3 ? numeroTrimestre++ : numeroTrimestre;

    alumns[i].isAproved = numeroTrimestre >=2 ? true : false;
}

console.log(alumns);