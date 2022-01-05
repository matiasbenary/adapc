/* 
String -> variables que almacenan texto 
*/

const nombre = 'Matias';
const apellido = 'Benary';

let nombreCompleto = `${nombre} ${apellido}`;
let nombreCompleto1 = nombre + apellido;

console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);

/*
Integer -> variables que almacenan numeros
*/

const numeros = 23;
console.log(12 == 12, 123 != 123, 123 > 45);

/*
Booleanos -> variables guardas 1 valor con dos posibilidades true false
*/

const hayTransporte = true;
const hayTren = false;

// negacion
console.log(!hayTransporte);
console.log(!hayTren);

// and
const mayorEdad = true;
const estamosATiempo = true;

console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);
console.log(hayTransporte && hayTren);
console.log(mayorEdad && estamosATiempo);

// or
const permisosPadres = true;
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);
console.log(hayTransporte || hayTren);
console.log(mayorEdad || permisosPadres);

if (permisosPadres) {
  console.log('Voy a ver la peli');
}

if (mayorEdad || permisosPadres) {
  console.log('Voy a ver la peli');
}

if (mayorEdad && estamosATiempo) {
  console.log('Voy a ver la peli');
}

if (true) {
  console.log('Voy a ver la peli');
} else {
  console.log('No voy a ver la peli');
}
//ternario

//  let pelicula = ""
//  if(!mayorEdad){
//   pelicula="Actividad paranormal"
// }else{
//   pelicula="Spiderman"
// }

let pelicula = !mayorEdad ? 'Actividad paranormal' : 'Spiderman';

console.log(pelicula);

// Funciones

const saludar = (nombre, apellido, mayorEdad) => {
  if (mayorEdad >= 18) {
    return `Hola como estas? ${nombre} ${apellido},ya salio Actividad paranormal `;
  } else if (mayorEdad >= 10) {
    return `Hola como estas? ${nombre} ${apellido},ya salio Spiderman`;
  }
  return `Hola como estas? ${nombre} ${apellido},ya salio Pocoyo`;
};

console.log(saludar('cami', 'Tunias', 9));

const array = [12, 123, 'Gdf', true, [123, 523]];

console.log(array[2]);
console.log(array[4]);
console.log(array[4][1]);

console.log(array.length);

let largo = array.push(14);
console.log(largo, array);

const ultimoElemento = array.pop();
console.log(ultimoElemento, array);

largo = array.unshift(141);
console.log(largo, array);

const primerElemento = array.shift();
console.log(primerElemento, array);

for (let index = 0; index < array.length; index++) {
  console.log(index);
  console.log(array[index]);
}

for (const item of array) {
  console.log(item);
}

for (const index in array) {
  console.log(index);
  console.log(array[index]);
}

const persona = { nombre: 'Matias', edad: 26, amigos: ['pepito', 'manolo'] };

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.amigos);
console.log(persona.amigos[0]);

console.log(persona["nombre"]);
for (const propiedades in persona) {
  console.log(propiedades);
  console.log(persona[propiedades]);
}