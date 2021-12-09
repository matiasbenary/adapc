/*
Destructuring
Es copiar la variables de forma mas sintentica
En objetos 
entre llaves y coloco el nombre de la propiedad 

En array 
entre corchetes y el orden de la variables importa,ya que es como se guardar
*/

const persona = {
  nombre: 'Matias',
  edad: 26,
  ocupacion: 'programador',
  amigos: [{ nombre: 'pepito' }],
  comidaFavorita: "Hamburgesa",
  mascotas: "Perros"
};


// const nombre = persona.nombre
// const edad = persona.edad

const { nombre, edad,amigos,ocupacion,...resto} = persona;
console.log(nombre);
console.log(edad);
console.log(amigos);
console.log(ocupacion);
console.log(resto);


const numeros = [12,31,45,87,09,52,14,15,33]

const [doce,numero1,numero2,numero3,...numerosRestantes] = numeros

console.log(doce,numero1,numero2,numero3,numerosRestantes);

// spread operator ...
const numeros2 = [100,123,123,43,54]
// const numeros3 = numeros.concat(numeros2)
const numeros3 = [...numeros,...numeros2]
console.log(Math.max(...numeros));
console.log(numeros3);

const persona2 = persona
const persona3 = {...persona}

console.log(persona2==persona);
persona2.nombre = "Juan Carlos"
persona3.nombre = "Nicolas"
console.log(persona);
console.log(persona)
console.log(persona3)


const saludar = (persona)=>{
  console.log(`Hola ${persona.nombre} tu pedido esta en camino,tu ${persona.comidaFavorita}`)
}

const saludar1 = (persona)=>{
  const {nombre , comidaFavorita} = persona
  console.log(`Hola ${nombre} tu pedido esta en camino,tu ${comidaFavorita}`)
}

const saludar2 = ({nombre , comidaFavorita},precio)=>{
  console.log(`Hola ${nombre} tu pedido esta en camino,tu ${comidaFavorita} sale ${precio}`)
}

const saludar3 = ({nombre:name , comidaFavorita:favFood},precio)=>{
  console.log(`Hola ${name} tu pedido esta en camino,tu ${favFood} sale ${precio}`)
}
saludar(persona3)
saludar1(persona3)
saludar2(persona3,50)
saludar3(persona3,50)

const sumaTotal = (...numeros)=>{
  let aux= 0;
  for (const numero of numeros) {
    aux+=numero
  }
  return aux
}

const sumaTotal1 = (...numeros)=>{
  let aux= 0;
  numeros.forEach(numero =>aux+=numero)
  return aux
}

const sumaTotal2 = (...numeros)=>{
  return numeros.reduce((acc,numero) =>{
    acc+=numero
    return acc
  })
}

console.log(sumaTotal2(12,34,5,4,213,1,54))