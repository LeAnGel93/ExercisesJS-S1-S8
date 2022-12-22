// Convierte la siguiente promesa para esperar 
// a ejecutar el console usando async-await.


// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const runTimeOut = async () => {
    try { 
        await new Promise((resolve) => {
            setTimeout(function () {resolve(); }, 2000)})
         console.log('estamos bien')
    }
    catch (err) {
                console.log (err)
 }


}

runTimeOut()
