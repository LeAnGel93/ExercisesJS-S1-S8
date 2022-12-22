// Usa un bucle para recorrer el array de peliculas (`movies`) 
// y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) 
// y al array `badProducts` los que tengan menos.

const goodProducts = [];
const badProducts = [];
const peliculas = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].sellCount > 20 ) {
       goodProducts.push(peliculas[i].name)      
    }    
    else if (peliculas[i].sellCount < 20) {
    badProducts.push(peliculas[i].name)
 }
}
console.log('buenas peliculas: ', goodProducts, 'malas peliculas: ', badProducts)