//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const parraf = document.createElement('p')
parraf.textContent = 'hola holita'
document.body.appendChild(parraf)
