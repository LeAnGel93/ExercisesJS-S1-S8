// Basandote en el siguiente html, añade un evento 'focus' que 
// ejecute un console.log con el valor del input.

const input$$ = document.querySelector('input')
//poniendo$$.id.add('poniendoCoso')
input$$.setAttribute('id','poniendoValor')
const interact$$ = () => {
    console.log('text');
}
document.getElementById('poniendoValor').addEventListener('focus', interact$$);

