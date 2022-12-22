//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div = document.createElement('div');
//makingP$$.innerHTML = '<p>hola</p>'
//let contador = 0
//div.innerHTML = '<p>hola</p>';

const p = document.createElement('p')


for (let i = 0; i < 6; i++) {
    
    const p = document.createElement('p')
    p.textContent = 'hola'
    div.appendChild(p)
    
}

document.body.appendChild(div)