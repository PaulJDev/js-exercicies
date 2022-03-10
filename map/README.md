## Map
### Array.prototype.map()

 
Este método devolverá un array con cada elemento modificado en base a una condición: 

```
const numeros = [1, 2, 3, 4, 5, 6];

//Números inferiores a cuatro
const numerosMapeados = numeros.filter(numero => numero + 1)
console.log(numerosMapeados); // [2, 3, 4, 5, 6, 7]
```

### Callback

Espera un callback como primer argumento de la función, éste lo podemos definir de las siguientes formas:

```
const numeros = [1, 2, 3, 4, 5, 6];


  1. const numerosMapeados = numeros.map(numero => numero + 1)
  2. const numerosMapeados = numeros.map(function (numero) {
      return numero + 1
    })
  o incluso
     const numeroMasUno = numero => numero + 1
  3. const numerosMapeados = numeros.map(numeroMasUno)
```

### Parámetros

Puede recibir tres argumentos:
  - El valor actual
  - El índice del este valor
  - El array sobre el que se está llamando

```
const numeros = [1, 2, 3, 4, 5, 6];
const numerosMapeados = numeros.map((numero, indice, array) => numero + array[indice])
console.log(numerosMapeados) //[2, 4, 6, 8, 10, 12]
``` 

### Ejemplos

#### Obtener los nombres de un array de objectos
```
const personas = [{ nombre: 'Alberto', edad: 25 }, { nombre: 'Pepe', edad: 28 }, { nombre: 'Javier', edad: 40 }]
const soloNombres = personas.map(persona => persona.nombre)
console.log(soloNombres) // ['Alberto', 'Pepe', 'Javier']
```
#### Añadir la propiedad "profesion" a todos los objetos de un array
```
const personas = [{ nombre: 'Alberto', edad: 25 }, { nombre: 'Pepe', edad: 28 }, { nombre: 'Javier', edad: 40 }]
const soloNombres = personas.map(persona => {
  persona.profesion = 'Mamporrero'
  return persona
})
console.log(soloNombres) /* [
  { nombre: 'Alberto', edad: 25, profesion: 'Mamporrero' },
  { nombre: 'Pepe', edad: 28, profesion: 'Mamporrero' },
  { nombre: 'Javier', edad: 40, profesion: 'Mamporrero' }] */
```
#### Obtener si los números son o no pares en una array
```
const numeros = [1, 2, 3, 4, 5, 6];
const sonPares = numeros.map(numero => numero % 2 === 0)
console.log(sonPares) //[false, true, false, true, false, true]
```

### Más información

[MDN Web Docs - Map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)