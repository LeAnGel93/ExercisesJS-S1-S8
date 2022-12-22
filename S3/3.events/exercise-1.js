// Añade un botón a tu html con el id btnToClick
//  y en tu javascript añade el evento click que ejecute un console log 
// con la información del evento del click


const button$$ = document.body.createElement('button');
button$$.setAttribute('id','btnToClick')
const interact$$ = (event) => {
    console.log(event);
    console.log(event.target.innerHTML)
}
document.getElementById('btnToClick').addEventListener('click', interact$$);

