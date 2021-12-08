/*
## Ejercicio Array 005

- Tenemos un array en una variable `frases` con frases al azar.
- Usar la función `map` para crear un nuevo array que contenga la longitud de cada palabra.
- Mostrar por consola el array original y el nuevo.

```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
*/

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// const frases = [17, 18, 16];

const largos = frases.map((frase) => {
  return frase.length;
});

console.log(largos);

/*
Ejercicio Array 009
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
También tenemos un array en una variable productos con los nombres de cada producto.
Completar el siguiente código para llegar al resultado esperado
A un costo primero se le agrega la ganancia y después el IVA
El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos


*/

const productos = ['celular', 'notebook', 'monitor'];
const costos = [12.5, 56, 98];

const agregarIVA = (costo) => {
  return costo * 1.21;
};

const sumarGanancia = (costo) => {
  return costo * 1.5;
};

// codear acá la solución del ejercicio
// const preciosFinales = costos.map(costo => sumarGanancia(costo))
const preciosFinales = costos.map(sumarGanancia)
                             .map(agregarIVA)
                             .map((costo,index)=>{
                               return `${productos[index]} ${costo}`
                             })
console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]
