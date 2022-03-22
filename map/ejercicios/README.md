# EJERCICIOS
## Map / FlatMap
### Map:

#### 1. Devuelve los números pero cada uno de ellos, multiplicado por 5
```
const numeros = [-1, 5, 8, 0, 10, 8]

//Solución: [ -5, 25, 40, 0, 50, 40 ]
```

#### 2.
```
const diccionario = { uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5 }
const numeros = ['uno', 'dos', 'tres', 'cuatro', 'cinco']

//Solución: [ 1, 2, 3, 4, 5 ]
```
#### 3.
```
const personas = [['nombre', 'Jose'], ['nombre', 'María'], ['nombre', 'Alberto'], ['nombre', 'Javier']]

//Resultado: [{ nombre: 'Jose' }, { nombre: 'María' }, { nombre: 'Alberto' }, { nombre: 'Javier' }]
```

#### 4.
```
const personas = [{ nombre: 'jose' }, { nombre: 'maríA' }, { nombre: 'alBerto' }, { nombre: 'jAVier' }]
  
//Resultado: [ 'Jose', 'María', 'Alberto', 'Javier' ]
```

#### 5.

```
const trabajos = [{ estado: 'finalizado' }, { estado: 'en pruebas' }, { estado: 'en proceso'}, { estado: 'finalizado' }]

/*Resultado:
[
    { estado: 'finalizado', revisar: true },
    { estado: 'en pruebas', revisar: false },
    { estado: 'en proceso', revisar: false },
    { estado: 'finalizado', revisar: true }
]*/
```

#### 6.
```
const sudoku = [
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
];

/* Resultado:
[
    [1, 4, 7, 9, 3, 6, 5, 2, 8],
    [3, 6, 9, 2, 5, 8, 7, 4, 1],
    [2, 5, 8, 1, 4, 7, 6, 3, 9],
    [5, 8, 2, 4, 7, 1, 9, 6, 3],
    [4, 7, 1, 3, 6, 9, 8, 5, 2],
    [6, 9, 3, 5, 8, 2, 1, 7, 4],
    [9, 3, 6, 8, 2, 5, 4, 1, 7],
    [8, 2, 5, 7, 1, 4, 3, 9, 6],
    [7, 1, 4, 6, 9, 3, 2, 8, 5]
]*/
```
#### 7.
```
const x = [['Hola', 'length'], [5, (n) => n * 2], [[1, 2, 3], (arr) => arr.toString()], [new Set([4, 5, 6]), 'size']]

// Resultado: [ 4, 10, '1,2,3', 3 ]
```
#### 8.
```
const numeros = ['1', '2', '3', '4', '5', '6']

//Resultado: [ 1, 2, 3, 4, 5, 6 ]
```
#### 9. 
```
const nombres = ['Antonio', 'Felip', 'Cristian', 'Eugeni', 'Paul', 'Borja', 'Jesus']
const sonJuniors = [false, true, true, false, true, true, true]
  
//Resultado: [ undefined, 'Felip', 'Cristian', undefined, 'Paul', 'Borja', 'Jesus' ]
```

#### 10. 
```
const alumnos = [[{ nombre: 'Clara'}, [9, 6]], [{ nombre: 'Rodrigo'}, [6, 4]], [{ nombre: 'Isabel'}, [10, 3]]]

/*Resultado: 
[
    { nombre: 'Clara', matematicas: 9, lengua: 6 },
    { nombre: 'Rodrigo', matematicas: 6, lengua: 4 },
    { nombre: 'Isabel', matematicas: 10, lengua: 3 }
]*/
```
### FlatMap:

#### 1. 
```
const numeros = [1, [2], [3], 4, [5], [6, 7, 8]]
 
//Resultado: [ 1, 2, 3, 4, 5, 6, 7, 8 ]  

```
#### 2. 
```
const nombres = ['Antonio', 'Felip', 'Cristian', 'Eugeni', 'Paul', 'Borja', 'Jesus']
const sonJuniors = [false, true, true, false, true, true, true]
  
//Resultado: [ 'Felip', 'Cristian', 'Paul', 'Borja', 'Jesus' ]
```

