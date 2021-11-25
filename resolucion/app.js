/*
  Datos Precargados
*/

const vendedoras= ["Ada", "Grace", "Hedy", "Sheryl"]

const ventas= [
  // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
  {
    id: 1,
    fecha: new Date(2019, 1, 4),
    nombreVendedora: "Grace",
    sucursal: "Centro",
    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
  },
  {
    id: 2,
    fecha: new Date(2019, 0, 1),
    nombreVendedora: "Ada",
    sucursal: "Centro",
    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
  },
  {
    id: 3,
    fecha: new Date(2019, 0, 2),
    nombreVendedora: "Grace",
    sucursal: "Caballito",
    componentes: ["Monitor ASC 543", "Motherboard MZI"],
  },
  {
    id: 4,
    fecha: new Date(2019, 0, 10),
    nombreVendedora: "Ada",
    sucursal: "Centro",
    componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
  },
  {
    id: 5,
    fecha: new Date(2019, 0, 12),
    nombreVendedora: "Grace",
    sucursal: "Caballito",
    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
  },
]

const componentes= [
  { componente: "Monitor GPRS 3000", precio: 200 },
  { componente: "Motherboard ASUS 1500", precio: 120 },
  { componente: "Monitor ASC 543", precio: 250 },
  { componente: "Motherboard ASUS 1200", precio: 100 },
  { componente: "Motherboard MZI", precio: 30 },
  { componente: "HDD Toyiva", precio: 90 },
  { componente: "HDD Wezter Dishital", precio: 75 },
  { componente: "RAM Quinston", precio: 110 },
  { componente: "RAM Quinston Fury", precio: 230 },
]

const sucursales= ["Centro", "Caballito"]

/*
- **precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

  ```js
  console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
  ```
*/
const precioComponente = (articulo) =>{
  for(const componente of componentes){
    if(componente.componente === articulo){
      return componente.precio
    }
  }
}
// console.log(precioComponente('Monitor GPRS 3000'))
console.log(precioComponente("HDD Toyiva"))


//  const prueba= [precioComponente('Monitor GPRS 3000'), precioComponente('Motherboard ASUS 1500')]

//  console.log(prueba)
//   const numeros = [12,657,123,34,5]
//   let acumulador = 0

//   for(const numero of numeros) {
//     acumulador += numero
//   }
  
//   console.log(acumulador)

const precioMaquina = (componentes) =>{
  let acumulador = 0;
  for(const componete of componentes){
    acumulador += precioComponente(componete)
  }
  return acumulador
}


console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']));

/*
- **cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable `ventas`.

  ```js
  console.log(cantidadVentasComponente('Monitor ASC 543')); // 2
  ```

  */

// const cantidadVentasComponente = (articulo) =>{

// }


// Sam y Frodo

// Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
// Ingresar nombres: Sam Frodo Legolas
// Sam y Frodo están juntos, ¡Frodo está a salvo!

// Ingresar nombres: Sam Orco Frodo
// Sam y Frodo están separados, ¡Frodo está en peligro!

const nombres =["Sam","Frodo","Legolas"]
// const nombres1 =["Sam","Orco","Frodo"]
let anterior = "";
for(const nombre of nombres){
  if(anterior == "Sam" && nombre == "Frodo"){
    console.log("Sam y Frodo están juntos, ¡Frodo está a salvo!")
  }
  anterior = nombre
}
console.log("¡Frodo está en peligro!")
