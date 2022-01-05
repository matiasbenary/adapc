/*
  Datos Precargados
*/

const vendedoras = ['Ada', 'Grace', 'Hedy', 'Sheryl'];

const ventas = [
  // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
  {
    id: 1,
    fecha: new Date(2019, 1, 4),
    nombreVendedora: 'Grace',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 2,
    fecha: new Date(2019, 0, 1),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 3,
    fecha: new Date(2019, 0, 2),
    nombreVendedora: 'Grace',
    sucursal: 'Caballito',
    componentes: ['Monitor ASC 543', 'Motherboard MZI'],
  },
  {
    id: 4,
    fecha: new Date(2019, 0, 10),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'],
  },
  {
    id: 5,
    fecha: new Date(2019, 0, 12),
    nombreVendedora: 'Grace',
    sucursal: 'Caballito',
    componentes: [
      'Monitor GPRS 3000',
      'Motherboard ASUS 1200',
      'Monitor GPRS 3000',
      'Motherboard ASUS 1500',
    ],
  },
];

const articulos = [
  { item: 'Monitor GPRS 3000', precio: 200 },
  { item: 'Motherboard ASUS 1500', precio: 120 },
  { item: 'Monitor ASC 543', precio: 250 },
  { item: 'Motherboard ASUS 1200', precio: 100 },
  { item: 'Motherboard MZI', precio: 30 },
  { item: 'HDD Toyiva', precio: 90 },
  { item: 'HDD Wezter Dishital', precio: 75 },
  { item: 'RAM Quinston', precio: 110 },
  { item: 'RAM Quinston Fury', precio: 230 },
];

const sucursales = ['Centro', 'Caballito'];

/*
- **precioMaquina(componentes)**: 
recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

  ```js
  console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
  ```

*/

const buscarPrecioDelArticulo = (articuloABuscar) => {
  for (const articulo of articulos) {
    if (articuloABuscar == articulo.item) {
      return articulo.precio;
    }
  }
};

const buscarPrecioDelArticulo1 = (articuloABuscar) => {
  return articulos.find((articulo) => articuloABuscar == articulo.item).precio;
};

console.log(buscarPrecioDelArticulo('Monitor GPRS 3000')); // 200
console.log(buscarPrecioDelArticulo('HDD Wezter Dishital')); // 75
console.log(buscarPrecioDelArticulo('HDD Wezter Dishitsdal')); // 75

console.log(buscarPrecioDelArticulo1('Monitor GPRS 3000')); // 200
console.log(buscarPrecioDelArticulo1('HDD Wezter Dishital')); // 75

const precioMaquina = (componentes) => {
  // primer paso recorrer la lista de componentes
  // segundo paso guardar en un acumulador la suma del precio de los componentes utilizando la funcion de buscarArticulo
  let precioTotal = 0;
  for (const componente of componentes) {
    precioTotal += buscarPrecioDelArticulo(componente);
  }
  return precioTotal;
};

console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320

// - **cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable `ventas`.

//   ```js
//   console.log(cantidadVentasComponente('Monitor ASC 543')); // 2
//   ```

const cantidadVentasComponente = (componenteABuscar) => {
  // primer paso recorrer ventas
  // segundo paso buscar componente en componentes
  // si existe sumo 1
  let contador = 0;
  for (const venta of ventas) {
    for (const componente of venta.componentes) {
      if (componente == componenteABuscar) {
        contador++;
      }
    }
  }
  return contador;
};

console.log(cantidadVentasComponente('Monitor ASC 543'));

const cantidadVentasComponente1 = (componenteABuscar) => {
  // primer paso recorrer ventas
  // segundo paso buscar componente en componentes
  // si existe sumo 1
  let contador = 0;
  for (const venta of ventas) {
    contador += venta.componentes.filter(
      (componente) => componente == componenteABuscar
    ).length;
  }
  return contador;
};

console.log(cantidadVentasComponente1('Monitor ASC 543'));
console.log(cantidadVentasComponente1('Monitor GPRS 3000'));

/*
- **vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  ```js
  console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
  ```

*/

const ventasPorFecha = (mes, anio) => {
  return ventas.filter((venta) => (mes - 1) == venta.fecha.getMonth() && anio == venta.fecha.getFullYear());
};
console.log(ventasPorFecha(2, 2019));

const vendedoraDelMes = (mes, anio) => {};

console.log(vendedoraDelMes(1, 2019));
