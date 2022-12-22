// Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

let colorsV2  = [...colors.slice(0,2), ...colors.slice(3,6)] 

//colors[1] = colorsV2
console.log(colorsV2)