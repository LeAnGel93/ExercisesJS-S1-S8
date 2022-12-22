// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', 
// dentro de todos los div con la clase .fn-insert-here

const p$$ = document.createElement('p');
p$$.textContent = 'Voy dentro!';
const inside$$ = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < inside$$.length; i++) {
    inside$$[i].appendChild(p$$);

    
}

//inside$$.appendChild(p$$)
