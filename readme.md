## ⚙️ Consigna

En este proyecto vas a desarrollar un sistema para llevar registro de ventas. Construirás un sistema de alta,baja y modificaciones con datos precargados, además se debe mostrar estadisticas. Para hacerlo, utilizarás un flujo de trabajo que te permitirá ir complejizando el código de manera gradual, pudiendo trabajar en varias funcionalidades por separado sin que estas afecten el resto de tu código.


## 💬 Comentarios

A diferencia del anterior, este proyecto tiene una cantidad de líneas de código mucho más reducida. El diseño no es complicado, no tenemos mucho que maquetar ni demasiados elementos que estilar o manipular. La dificultad consiste en que tiene una lógica más compleja, que requiere ser pensada y analizada de antemano con más cuidado y detalle que en los proyectos anteriores.

Si empezamos a probar y modificar cosas, sin tener muy en claro qué y por qué lo estamos haciendo, es probable que nos encontremos con caminos sin salida muy seguido, que el código se vuelva muy difícil de seguir y que tengamos que volver hacia atrás reiteradas veces.

## ✏️ Datos precarcados

```javascript

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

```

## 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes, íconos y temática (en vez de frutas, usar otros emojis, íconos u imágenes)
- Debe respetar las interacciones
- Debe cumplir con las funcionalidades _principales_ listadas en la sección siguiente
- Debe estar deployado y ser accesible desde una dirección web
- **No se debe trabajar en la rama `main`**. En `main` sólo van a mergearse las demás ramas, por lo que cada `commit` de `main` debería ser el `merge` de una `branch` de una funcionalidad _terminada_

## 🎛 Funcionalidades principales

1. Debe generar un modal para cargar las ventas.
2. Debe generar un tabla donde se muestre las ventas.
3. Debe ver indicadores que muestren los productos mas vendidos y la mejor vendedora.
4. Debe poder borrar las ventas.
5. Debe poder editar las ventas.
6. Cada cambio debe actualizar toda informacion mostrada.

## 💡 Hint

Para facilitar el desarrollo del proyecto es muy recomendable hacer las siguientes funciones. Esto evita código entendible y repetido.
Por último recordemos que una función tiene una solo responsabilidad, es decir que tiene que realizar una sola cosa y hacerlo bien.

- **precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

  ```js
  console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
  ```

- **cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable `ventas`.

  ```js
  console.log(cantidadVentasComponente('Monitor ASC 543')); // 2
  ```

- **vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  ```js
  console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
  ```

- **ventasMes(mes, anio)**: Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  ```js
  console.log(ventasMes(1, 2019)); // 1250
  ```

- **ventasVendedora(nombre)**: Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

  ```js
  console.log(ventasVendedora('Grace')); // 900
  ```

- **componenteMasVendido()**: Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`

  ```js
  console.log(componenteMasVendido()); // Monitor GPRS 3000
  ```

- **huboVentas(mes, anio)**: que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  ```js
  console.log(huboVentas(3, 2019)); // false
  ```

- Crear la función **ventasSucursal(sucursal)**, que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

  ```js
  console.log(ventasSucursal('Centro')); // 990
  ```

- Las funciones **ventasSucursal** y **ventasVendedora** tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

- Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

  ```js
  console.log(sucursalDelMes(1, 2019)); // "Centro"
  ```

## 📝 Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna
  - Estructura correcta de documento HTML
  - Respeta el diseño dado
  - Respeta el funcionamiento
  - Responsive funciona correctamente
- **7 (Bueno)**
  - Estilos limpios y bien estructurados
  - Buena estructura de proyecto
  - Código bien indentado
  - Uso correcto de etiquetas semánticas
- **8 (Muy bueno)**
  - Cumple con las funcionalidades avanzadas
  - Buenos nombres de clases
  - Buenos nombres de funciones y variables
- **9 (Muy bueno)**
  - Funciones pequeñas
  - Nombres de branchs adecuados
  - Buen uso estructuras de datos (arrays, matrices y objetos)
  - Buen uso de estructuras de control (condicionales y bucles)
- **10 (Excelente)**
  - Lógica clara y simple
  - Reutilización de lógica / funciones
  - Commits con mensajes adecuados

## 🧰 Recursos

- [FontAwesome](https://fontawesome.com/icons?d=gallery) - Íconos
- [Pacifico](https://fonts.google.com/specimen/Pacifico) - Fuente
- [Montserrat](https://fonts.google.com/specimen/Montserrat) - Fuente