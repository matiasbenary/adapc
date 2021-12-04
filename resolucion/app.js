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
    componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200","Monitor GPRS 3000", "Motherboard ASUS 1500"],
  },
]

const articulos= [
  { item: "Monitor GPRS 3000", precio: 200 },
  { item: "Motherboard ASUS 1500", precio: 120 },
  { item: "Monitor ASC 543", precio: 250 },
  { item: "Motherboard ASUS 1200", precio: 100 },
  { item: "Motherboard MZI", precio: 30 },
  { item: "HDD Toyiva", precio: 90 },
  { item: "HDD Wezter Dishital", precio: 75 },
  { item: "RAM Quinston", precio: 110 },
  { item: "RAM Quinston Fury", precio: 230 },
]

const sucursales= ["Centro", "Caballito"]

/*
- **precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

  ```js
  console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
  ```
*/
// const precioComponente = (articulo) => componentes.find(componente=> componente.item == articulo).precio;



const precioComponente = (articulo) =>{
  for (const componente of articulos) {
    if(articulo == componente.item){
      return componente.precio
    }
  }
}

// const precioComponente = (articulo) =>{
//   const aux = componentes.find(componente=> componente.item == articulo);
//   return aux.precio
// }
console.log(precioComponente('Monitor GPRS 3000'))
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
  let total = 0;
  for (const articulo of articulos) {
    
  }
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

