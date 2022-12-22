const elBoss = {
  nombre: "Jose Luis",
  edad: 194,
  poderes: [
    {
      nombre: "Paranoia",
      description: "intentandome escapar de esta paranoia",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la paranoia",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la paranoia",
          },
        },
      ],
    },
    {
      nombre: "Petrificasió",
      description: "Te mira y te petrifica",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la petrificasió",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la petrificasió",
          },
        },
      ],
    },
    {
      nombre: "Fuego",
      description: "Pues eso, fuego",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del fueguito",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del fueguito",
          },
        },
      ],
    },
  ],
  familiares: [
    {
      nombre: "Julian",
      edad: 342,
      parentesco: "Primo",
    },
    {
      nombre: "Paquito",
      edad: 312,
      parentesco: "Tío",
    },
    {
      nombre: "Emma",
      edad: 13,
      parentesco: "Sobrina",
    },
    {
      nombre: "Julia",
      edad: 100,
      parentesco: "Hermana",
    },
  ],
  reto: [
    [
      {
        sigueElReto: [
          {
            sigueElReto2: {
              sigueElReto3: {
                pareceQueSabesBucearEntreObjetos: {
                  definitivamenteSabes: [
                    "Jose",
                    "Luis,",
                    "te",
                    "miro",
                    "y",
                    23121,
                    "te",
                    "destruyo",
                    {
                      mensajeFinal:
                        "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
let bossName = elBoss.nombre
console.log(bossName,', te conozco y no me das ningún miedo!');
// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log('Conozco tus poderes y lo que hacen')
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
for (let i = 0; i < elBoss.poderes.length; i++) {
  const powersDescription = elBoss.poderes[i];
   if ( i == 0) {
    console.log('Tu primer poder es, ', powersDescription.nombre,', y hace', powersDescription.description)
   } else if (i == 1) {
    console.log('Tu segundo poder es, ', powersDescription.nombre,', y hace', powersDescription.description)
   }
   else if (i == 2) {
    console.log('Tu tercer poder es, ', powersDescription.nombre,', y hace', powersDescription.description)
   }
}

// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
 console.log ('También se tu punto más debil, tus familiares, y les conozco...')
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"

  for (let i = 0; i < elBoss.familiares.length; i++) {
    const parentescoFamiliar = elBoss.familiares[i];
     if (i == 0) {
      console.log('Conozco a tu',parentescoFamiliar.parentesco,parentescoFamiliar.nombre)
     } else if (i == 1) {
      console.log('Conozco a tu',parentescoFamiliar.parentesco,parentescoFamiliar.nombre)
     } else if (i == 2) {
      console.log('Conozco a tu',parentescoFamiliar.parentesco,parentescoFamiliar.nombre)
     } else if (i == 3) {
      console.log('Y conozco a tu',parentescoFamiliar.parentesco,parentescoFamiliar.nombre)
     }
     
  }
// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".

let findingReto = elBoss.reto
findingReto = findingReto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;
//console.log(findingReto)

for (let i = 0; i < findingReto.length; i++) {
  const destruyendo = findingReto;
  if (i < 5) {
    process.stdout.write(destruyendo[i] + " ");
  }
  if (i > 5 && i < 8) {
    process.stdout.write(destruyendo[i]+ " ");
  }
}

  //console.log(elBoss.reto.length)
    // for (let i = 0; i < elBoss.reto.length; i++) {
    //   let buceando = elBoss.reto[i]; 
    //       for (let j = 0; j < buceando.length; j++) {
    //         let buceando1 = buceando[j]; {
    //           for (let k = 0; k < buceando1.length; k++) {
    //             let buceando2 = buceando1[k]; {
    //               for (let l = 0; l < buceando2.length; l++) {
    //                 const element = buceando2[l];
    //                 console.log (buceando2)
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }

// for (const a of elBoss.reto) {
//   for (const b of a) {
//     for (const c of b.sigueElReto) {
//       for (const d of c.sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes) {
//         console.log(d);
//         if (typeof d === "string") {
//           frames.push(d);
//         }
//       }
//     }
//   }
// }



//         console.log(buceando2);
//     } 
//   }
// }
// }
// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.

// let bossPowers = elBoss.poderes
// bossPowers = bossPowers.imagenes
// console.log(bossPowers.imagen1)
// for (let i = 0; i < bossPowers.imagenes.length; i++) {
//   const urlPowers = bossPowers.imagenes[i];
//   console.log(urlPowers)
// }

// haremos la media de las edades de los familiares de elBoss.

let suma = 0
for (let i = 0; i < elBoss.familiares.length; i++) {
  let totalEdades = elBoss.familiares[i];
  totalEdades = totalEdades.edad;
  suma += totalEdades;

}
let mediaEdades = suma/4
console.log (mediaEdades)
 
// y mostraremos por pantalla el mensajeFinal.

