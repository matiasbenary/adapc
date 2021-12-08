const edades = [12, 15, 16, 67, 34];
const nombres = ['Matias', 'Pepito', 'Dolores', 'Sol'];
const usuarios = [
  {
    nombre: 'Matias',
    edad: 26,
  },
  {
    nombre: 'Pepito',
    edad: 42,
  },
  {
    nombre: 'Dolores',
    edad: 31,
  },
  {
    nombre: 'Sol',
    edad: 22,
  },
];

for (const edad of edades) {
  console.log(edad);
}

for (const nombre of nombres) {
  console.log(nombre);
}

const imprimir = (item, index, array) => {
  console.log(item, index, array);
};

// edades.forEach(edad=>{
//   console.log(edad);
// })

console.log(imprimir);
edades.forEach(imprimir);

const forEach = (array, callback) => {
  for (const item of array) {
    console.log(item);
  }
};

forEach(edades, imprimir);

const edadPerruna = edades.map((edad) => {
  return edad / 7;
});
console.log(edadPerruna);

const nombresEnMayuscula = nombres.map((n) => {
  if (n == 'Matias') {
    return 'matias';
  }
  return n.toLocaleUpperCase();
});

console.log(nombresEnMayuscula);

const edadMayor = edades.filter((edad) => {
  return edad >= 18;
});

console.log(edadMayor);

const pepito = usuarios.find((usuario) => {
  return usuario.nombre == 'Pepito';
});

console.log(pepito.edad);

const pepitoIndex = usuarios.findIndex((usuario) => {
  return usuario.nombre == 'Pepito';
});

console.log(pepitoIndex);

const ventas = [
  {
    articulo: 'Mesa',
    precio: 26,
  },
  {
    articulo: 'Tele',
    precio: 42,
  },
  {
    articulo: 'Mesa',
    precio: 31,
  },
  {
    articulo: 'Taza',
    precio: 22,
  },
];

const aux = [];
for (const venta of ventas) {
  if (venta.articulo == 'Mesa') {
    aux.push(venta);
  }
}

const soloMesas = ventas.filter((venta) => {
  return venta.articulo == 'Mesa';
});

console.log(soloMesas);
const mesaImpuestos = soloMesas.map((mesa) => {
  return mesa.precio * 1.21;
});

const mesaImpuestos1 = ventas
  .filter((venta) => venta.articulo == 'Mesa')
  .map((mesa) => mesa.precio * 1.21);

console.log(mesaImpuestos); //[26*1.21, 31*1.21]
