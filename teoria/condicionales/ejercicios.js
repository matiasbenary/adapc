/*
puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
*/

const puedeVerPelicula = (edad, tieneAutorizacion) =>{
  return edad >= 15 || tieneAutorizacion
} 

// const puedeVerPelicula = (edad, tieneAutorizacion) =>{
//   if(edad >= 15 || tieneAutorizacion == true){
//     return true
//   }else{
//     return false
//   }
// } 


console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));
puedeVerPelicula(12, false) // false 
puedeVerPelicula(12, true)  // true 
puedeVerPelicula(16, false) // true 
puedeVerPelicula(18, true)  // true


// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)


const estaEnRango = (valor, minimo, maximo) =>{

  // 10>= -3 -> true
  // true >= 1 -> true
  //1 >= 1 ->true
  // if(maximo>=valor && valor>= minimo){
  //   return true
  // }
  // return false

  return maximo>=valor && valor>= minimo
}
console.log(estaEnRango(3, 1, 10));
console.log(estaEnRango(1, 1, 10));
console.log(estaEnRango(10, 1, 10));
console.log(estaEnRango(12, 1, 10));
console.log(estaEnRango(-3, 1, 10));
estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false


/*
avanzarSemaforo(colorActual)
Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'

*/

const avanzarSemaforo = (colorActual)=>{
  let color = ""
  // if(colorActual == "verde"){
  //   color= "amarillo"
  // }else if(colorActual == "amarillo"){
  //   color = "rojo"
  // }else if(colorActual == "rojo"){
  //   color = "verde"
  // }

  switch(colorActual){
    case "verde":
      color= "amarillo"
      break;
    case "rojo":
      color = "verde"
      break
    case "amarillo":
      color = "rojo"
      break
  }
  return color
}

console.log(avanzarSemaforo('verde'));
console.log(avanzarSemaforo('amarillo'));
console.log(avanzarSemaforo('rojo'));

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'