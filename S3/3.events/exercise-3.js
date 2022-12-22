// Basandote en el siguiente html, añade un evento 'input' que 
// ejecute un console.log con el valor del input.

const input$$ = document.querySelector('input')
input$$.setAttribute('id','poniendoValor')
const interact$$ = (event) => {
    
    console.log(event);
    console.log(event.target.innerHTML)
}
document.getElementById('poniendoValor').addEventListener('input', interact$$);