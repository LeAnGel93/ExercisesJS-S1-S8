//Inserta dinamicamente en un html un div que contenga una p con javascript.

// const div$$ = document.createElement('div');
// div$$.classList.add('empty');
// document.body.appendChild(div$$)

const div = document.createElement('div');
div.innerHTML = '<p>hola</p>';
document.body.appendChild(div)

//Otra forma abajo:
// const p = document.createElement('p')
// p.classList.add('p');
// div.appendChild(p)
//document.div.appendChild(div)