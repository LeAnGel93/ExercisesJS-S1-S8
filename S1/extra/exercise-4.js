// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];


// console.log(products[0].sellCount)
// let productos = products[0]
// console.log(productos)

let ventasTotal = 0;
for (let i = 0; i < products.length; i++) {
    ventasTotal += products[i].sellCount
    // console.log(products[i].sellCount);
    // ventasTotal[i] = element + ventasTotal;
    // console.log(ventasTotal)
}

console.log(ventasTotal)