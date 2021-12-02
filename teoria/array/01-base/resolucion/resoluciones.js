const numeros = [123, 123, 676, 123, 34];
const numeros2 = [123, 123, 676, 123, 34];
const numeros3 = numeros;
const vector = new Array(1, 2, 5);

console.log(vector);
console.log(numeros == numeros2);
console.log(numeros == numeros3);

//el indice la posicion de un elemento dentro del array
primerElemento = numeros[0];
console.log(primerElemento);

// conocer la longitud
console.log(numeros.length);
ultimoElemento = numeros[numeros.length - 1];
console.log(ultimoElemento);

//metodos de insercion
//insertamos al final
numeros.push(36);
console.log(numeros);
//insertamos al principio
numeros.unshift(47);
console.log(numeros);

//metodos de extraccion
//saco el ultimo elmento
const ultimo = numeros.pop();
console.log({ numeros, ultimo });
//saco el ultimo primer
const primero = numeros.shift();
console.log({ numeros, primero });

const biblioteca = [
  ['El principito', 145],
  ['Harry Potter 3', 350],
];
console.log(biblioteca[0][0]);

biblioteca.push(['Harry Potter 2', 234]);
console.log(biblioteca);








console.log(biblioteca);

for (let index = 0; index < biblioteca.length; index++) {
  const libro = biblioteca[index];
  console.log(libro);
}
// ['El principito', 145]
for (const libro of biblioteca) {
  console.log(libro);
}
// 0
// biblioteca[indice] => biblioteca[0] => ['El principito', 145]

for (const indice in biblioteca) {
  console.log(indice);
  const libro = biblioteca[indice];
  console.log(libro);
  
}
/**
 *
 *
 * Resolucion de ejercicions
 *
 *
 */

/*
## Ejercicio Array 003

- Declarar un array con el nombre **discoNevermind** y asignar los siguientes valores:
  - Smells Like Teen Spirit
  - In Bloom
  - Come As You Are
  - Immodium
  - Lithium
  - Polly
  - Territorial Pissings
  - Drain You
  - Lounge Act
  - Pay To Play
  - On a Plain
  - Endless, Nameless
- Reemplazar `Immodium` por `Breed`
- Reemplazar `Pay To Play` por `Stay Away`
- Reemplazar `Tim` por `Something in the Way`
- Mostrar en consola la lista de canciones modificada
- El resultado debería ser: `["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]`
*/

const discoNevermind = [
  'Smells Like Teen Spirit',
  'In Bloom',
  'Come As You Are',
  'Immodium',
  'Lithium',
  'Polly',
  'Territorial Pissings',
  'Drain You',
  'Lounge Act',
  'Pay To Play',
  'On a Plain',
  'Endless, Nameless',
];
discoNevermind[3] = 'Breed'
discoNevermind[9] = 'Stay Away'


console.log(discoNevermind);


/*
## Ejercicio Array 004

- Declarar una variable `etiquetasHtml` con varios de los nombres de las etiquetas de HTML que ya conocés
- Mostrar en consola el nombre de la 2da etiqueta del array **en mayúsculas**
- Mostrar en consola el nombre de la 5ta etiqueta del array **en minúsculas**
- Mostrar en consola la cantidad de etiquetas guardadas en el array
*/

const etiquetasHtml = ["Dody","Main","Header","Div","Footer","p","a","h1","h2"];
console.log(etiquetasHtml[1].toUpperCase());
console.log(etiquetasHtml[4].toLocaleLowerCase());
console.log(etiquetasHtml.length);


/*
## Ejercicio Array 006

- Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array `playlistNirvana` tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array `playlistFoo` tiene más elementos.

```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
```
 */


const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];

if(playlistNirvana.length > playlistFoo.length){
  console.log("La playlist de Nirvana tiene más canciones")
}else{
  console.log("La playlist de Foo Fighters tiene más canciones")
}

const resultadoPlaylist = playlistNirvana.length > playlistFoo.length?"La playlist de Nirvana tiene más canciones":"La playlist de Foo Fighters tiene más canciones"

console.log(resultadoPlaylist);


/*
## Ejercicio Array 007

- Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando `shift` y `unshift`.

```js
const frutas = ["Manzana", "Banana"];
```


*/
const fruta = "Pera"
const frutas = ["Manzana", "Banana"];
frutas.shift();
frutas.unshift(fruta);
console.log(frutas);

/*
## Ejercicio Array 008

- Declarar una variable llamada `concreteAndGold` y asignarle un array vacio `[]`
- Agregar al array las siguientes canciones:
  - T-Shirt
  - Run
  - Make It Right
  - The Sky Is a Neighborhood
  - La Dee Da
  - Dirty Water
  - Arrows
  - Happy Ever After (Zero Hour)
  - Sunday Rain
  - The Line
  - Concrete and Gold
- No se puede utilizar índices numéricos
- Utilizar alguna de las siguientes funciones: `shift`, `unshift`, `push`, `pop`
- Los elementos tienen que guardarse en el mismo orden que se van ingresando
- Mostrar en consola la primera y última canción
- Mostrar en consola el contenido del array
- Resultado esperado:

```bash
"T-Shirt"
"Concrete and Gold"
["T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold"]


*/
const concreteAndGold = []
concreteAndGold.push("T-shirt","Run","Make it Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold") 

console.log(concreteAndGold.shift());
console.log(concreteAndGold.pop());

concreteAndGold.unshift("T-Shirt")
concreteAndGold.push("Concrete and Gold")
console.log(concreteAndGold);


/*
## Ejercicio Array 014

- Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
  - Posición de la canción **Lithium**
  - Posición de la canción **On a Plain**
- Completar el siguiente código para que pueda mostrarnos lo que solicitamos

```js
const playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];


// completar las dos asignaciones de abajo
const indiceLithium = ;
const indiceOnAPlain = ;

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1

*/


const playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium']

console.log(playlist[1]);

const buscarIndiceCancion = (nombre)=>{
  //nombre => "Lithium"
  for (const i in playlist) {
    // i = 0
    // cancion = playlist[0] => 'Smells Like Teen Spirit'
    const cancion = playlist[i];
    //if('Smells Like Teen Spirit' == "Lithium")
    // 'Smells Like Teen Spirit' == "Lithium" => false
    // if(false)
    if(cancion == nombre){
      return i
    }
  }
  return -1
}


console.log(buscarIndiceCancion("Lithium")); 
console.log(buscarIndiceCancion("On a Plain")); 

console.log(playlist.indexOf("Lithium")); 
console.log(playlist.indexOf("On a Plain")); 

/*
## Ejercicio Array 017

- Tenemos un array llamado `womenInTech` con nombres de mujeres influyentes en la tecnología.
- Queremos transformar el array en un string sin usar **join**, separando los nombres con un guión y guardando el string resultante en la variable `nombresSeparadosPorGuion`

```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
let nombresSeparadosPorGuion = "";

 aca va la solucion

console.log(nombresSeparadosPorGuion);
 deberia mostrar "Ada Lovelace - Hedy Lamarr - Grace Hopper - Radia Perlman - Janie Tsao - Sheryl Sandberg - Susan Kare - Parisa Tabriz"
```
*/

const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
let nombresSeparadosPorGuion = "";

for (const woman of womenInTech) {
  nombresSeparadosPorGuion +=    woman + " - "
}

nombresSeparadosPorGuion = nombresSeparadosPorGuion.slice(0,-3)

console.log(nombresSeparadosPorGuion);

nombresSeparadosPorGuion = womenInTech.toString().replaceAll(',',' - ');

// aca va la solucion

console.log(nombresSeparadosPorGuion); 

console.log(womenInTech.join(" - "))

/*
## Ejercicio Array 019

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// SOLUCION

console.log(notaFinal);
// deberia mostrar 6.8
```

*/

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
let suma = 0
for (const nota of notasDeTPs) {
  suma += nota 
}
const division = notasDeTPs.length
notaFinal = suma/division
console.log(notaFinal);
// deberia mostrar 6.8

notaFinal =0
for (const nota of notasDeTPs) {
  notaFinal += nota/ notasDeTPs.length
}

console.log(notaFinal);