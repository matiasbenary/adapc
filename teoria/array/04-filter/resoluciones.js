/*
Ejercicio Array 001
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
Mostrar el array original y el filtrado

*/

const costos = [
  39,
  53,
  17,
  99,
  7,
  9,
  6,
  68,
  54,
  97,
  27,
  90,
  92,
  75,
  26,
  86,
  22,
  42,
  20,
  14,
];
// codear acá la solución del ejercicio
const losMasCaros = costos.filter(costo=>costo>50)
console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

/*
Ejercicio Array 004
Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.
Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
Mostrar el array resultante

// deberia mostrar

*/

const mix = [
  "Ut vero.",
  2,
  function () {
    console.log("hola mundo!");
  },
  56,
  "Diam rebum nonumy et.",
  true,
  false,
  "Kasd stet.",
  "Sit et dolor.",
  null,
  null,
  [1, 2, 3],
  "Dolore.",
];

// codear acá la solución del ejercicio
const soloStrings = mix.filter(item=>typeof item === "string")
console.log(soloStrings);
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

/*
Ejercicio Array 005
Tenemos un array playlist con canciones seleccionadas al azar por spotify para reproducir.
Tenemos otro array playlistEscuchada que tiene canciones que ya escuchamos anteriormente.
Usando filter, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en playlist que no están en playlistEscuchada
Guarda el resultado en la variable playlistSinEscuchar
*/
const playlist = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
const playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];


// const playlistSinEscuchar = playlist.filter(song=> !playlistEscuchada.includes(song))
const playlistSinEscuchar = playlist.filter(song=> !playlistEscuchada.find(song1=>song1 === song))
/// codea aca tu solución

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
