// En base al ejercicio anterior. Crea dinamicamente un elemento <p> 
// por cada petición a la api que diga...
// 'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET 
// y un 6 porciento de ser de MZ.

const baseUrl = 'https://api.nationalize.io?name=';

  const search = () => {
    const input$$ = document.querySelector("input");
    
    fetch("https://api.nationalize.io?name=" + input$$.value) 
    .then((response) => {response.json()})
    .then((response) => {console.log(response);});

    const p$$ = document.createElement('p');
}
    const button$$ = document.querySelector("button");

    button$$.addEventListener("click", search);