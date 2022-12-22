// Basandote en el siguiente html, 
// inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const p$$ = document.createElement('p');
const insert$$ = document.querySelector('.fn-insert-here');
p$$.textContent = 'insertando cositas';
insert$$.appendChild(p$$)
