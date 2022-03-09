## Filter
### Array.prototype.filter()

 
Este método devolverá un array con los datos que se hayan filtrado en base a una condición: 

```
const numeros = [1, 2, 3, 4, 5, 6];

//Números inferiores a cuatro
const numerosFiltrados = numeros.filter(number => number < 4)
console.log(numerosFiltrados); // [1, 2, 3]
```

### Callback

Espera un callback como primer argumento de la función, éste lo podemos definir de las siguientes formas:

```
const numeros = [1, 2, 3, 4, 5, 6];


  1. const numerosFiltrados = numeros.filter(number => number < 4)
  2. const numerosFiltrados = numeros.filter(function (numero) {
      return numero < 4
    })
  o incluso
     const numerosMenoresACuatro = numero => numero => numero < 4
  3. const numerosFiltrados = numeros.filter(numerosMenoresACuatro)
```



### Más información

[MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)