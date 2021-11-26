// dentro de los parentesis se coloca una condicion que tiene que ser un booleano
// o un valor truthy
// https://developer.mozilla.org/es/docs/Glossary/Truthy

const opcion = 2

if (opcion === 1) {
  console.log('Hago algo');
} else if (opcion === 2) {
  console.log('Hago otra cosa');
} else {
  console.log('Si no coinciden con lo anterior hago eso');
}

switch (opcion) {
  case 1:
    console.log('Hago algo');
    break;
  case 2:
    console.log('Hago otra cosa');const traeDni = true;
    break;
  default:
    console.log('Si no coinciden con lo anterior hago eso');
}

const edad = 19;
const traeDni = true;
let msj = '';
if (edad >= 18) {
  msj = 'Puedes ingresar';
} else {
  msj = 'No puedes ingresar';
}
// variable = condicion ? guardar si es true : guardar si es false
const msj2 = (edad >= 18 && traeDni)  ? 'Puedes ingresar' : 'No puedes ingresar';


// &&
// primer elemento es true -> se guarda el segundo
// primer elemento es false -> se guarda el primero

// ||
// primer elemento es false -> se guarda el segundo
// primer elemento es true -> se guarda el primero
// const traeDni = true;
const msj3 = traeDni && "puede ingresar"
const msj4 = traeDni || "no puede ingresar"
console.log({msj3,msj4})

const obtenerMsj= (nombre,edad)=>{
  nombre = nombre|| "No indentificado"
  return `hola ${nombre} tengo ${edad}`
  
}