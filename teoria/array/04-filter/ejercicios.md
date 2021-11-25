# Filter

## Ejercicio Array 001

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- Usando `filter`, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable `losMasCaros`
- Mostrar el array original y el filtrado

```js
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

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]
```

## Ejercicio Array 002

- Tenemos un array en una variable `frases` con frases al azar.
- Usando `filter`, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable `frasesCortas`
- Mostrar el array resultante

```js
const frases = [
  'Ut vero.',
  'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
  'Diam rebum nonumy et.',
  'Kasd stet.',
  'Sit et dolor.',
  'Est diam justo gubergren dolores et vero.',
  'Et sanctus sanctus et dolor clita.',
  'Dolores.',
  'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
];

// codear acá la solución del ejercicio
const frasesCortas = ;

console.log(frasesCortas);
// deberia mostrar
// [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]
```

## Ejercicio Array 003

- Tenemos un array en una variable `numeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Utilizando `filter` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`
- Utilizando `filter` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;
const numerosImpares = ;

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```

## Ejercicio Array 004

- Tenemos un array en una variable `mix` con varios elementos, de distintos tipos de datos.
- Usando `filter`, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable `soloStrings`.
- Ayuda: para saber si algo es un string en javascript, podés usar typeof [ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof)
- Mostrar el array resultante

```js
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

console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
```

## Ejercicio Array 005

- Tenemos un array `playlist` con canciones seleccionadas al azar por spotify para reproducir.
- Tenemos otro array `playlistEscuchada` que tiene canciones que ya escuchamos anteriormente.
- Usando `filter`, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en `playlist` que no están en `playlistEscuchada`
- Guarda el resultado en la variable `playlistSinEscuchar`

```js
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

/// codea aca tu solución

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
```
