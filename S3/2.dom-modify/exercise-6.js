// Basandote en el siguiente array crea una lista ul > li con los 
// textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    
    const li$$ = document.createElement('li');
    li$$.textContent = apps[i];
    ul$$.appendChild(li$$);
    
}

document.body.appendChild(ul$$)