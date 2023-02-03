// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
    return true;
  }
console.log(siempreTrue())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asyncSaludo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hola soy una promesa");
        resolve();
      }, 5000);
    });
  }

//console.log(asyncSaludo())

// - Una función generadora de índices pares automáticos
function* generarIndices() {
    let indice = 0;
    while (true) {
        indice += 2;
        yield indice;
    }
}