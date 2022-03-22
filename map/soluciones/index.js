// 1. Devuelve los números pero cada uno de ellos, multiplicado por 5
console.log('MAP:')
{
  const numeros = [-1, 5, 8, 0, 10, 8]
  const respuesta = numeros.map(e => e * 5)

  // Solución: [ -5, 25, 40, 0, 50, 40 ]
  console.log('\n1 - ', respuesta)
  console.log('const respuesta = numeros.map(e => e * 5)')
}
// 2.

{
  const diccionario = { uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5 }
  const numeros = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
  const respuesta = numeros.map(e => diccionario[e])

  // Solución: [ 1, 2, 3, 4, 5 ]
  console.log('\n2 - ', respuesta)
  console.log('const respuesta = numeros.map(e => diccionario[e])')
}
// 3.

{
  const personas = [['nombre', 'Jose'], ['nombre', 'María'], ['nombre', 'Alberto'], ['nombre', 'Javier']]
  const respuesta = personas.map(([clave, valor]) => ({ [clave]: valor }))

  // Resultado: [{ nombre: 'Jose' }, { nombre: 'María' }, { nombre: 'Alberto' }, { nombre: 'Javier' }]
  console.log('\n3 - ', respuesta)
  console.log('const respuesta = personas.map(([clave, valor]) => ({ [clave]: valor }))')
}

// 4.

{
  const personas = [{ nombre: 'jose' }, { nombre: 'maríA' }, { nombre: 'alBerto' }, { nombre: 'jAVier' }]
  const respuesta = personas.map(({ nombre }) => nombre.at(0).toUpperCase() + nombre.slice(1).toLocaleLowerCase())

  // Resultado: [ 'Jose', 'María', 'Alberto', 'Javier' ]
  console.log('\n4 - ', respuesta)
  console.log('const respuesta = personas.map(({ nombre }) => nombre.at(0).toUpperCase() + nombre.slice(1).toLocaleLowerCase())')
}

// 5.

{
  const trabajos = [{ estado: 'finalizado' }, { estado: 'en pruebas' }, { estado: 'en proceso' }, { estado: 'finalizado' }]

  const respuesta = trabajos.map(trabajo => trabajo.estado === 'finalizado' ? { ...trabajo, revisar: true } : { ...trabajo, revisar: false })

  /* Resultado:
    [
      { estado: 'finalizado', revisar: true },
      { estado: 'en pruebas', revisar: false },
      { estado: 'en proceso', revisar: false },
      { estado: 'finalizado', revisar: true }
    ] */
  console.log('\n5 - ', respuesta)
  console.log("const respuesta = trabajos.map(trabajo => trabajo.estado === 'finalizado' ? { ...trabajo, revisar: true } : { ...trabajo, revisar: false })")
}

// 6.

{
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
  ]

  const respuesta = sudoku.map((_, i, arr) => arr.map(linea => linea[i]))

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
    ] */

  console.log('\n6 - ', respuesta)
  console.log('const respuesta = sudoku.map((_, i, arr) => arr.map(linea => linea[i]))')
}
// 7.

{
  const elementos = [['Hola', (str) => `${str} Mundo`], ['length', 'length'], [5, (n) => n * 2], [[1, 2, 3], (arr) => arr.toString()], [new Set([4, 5, 6]), 'size']]
  const respuesta = elementos.map(([uno, dos]) => typeof dos === 'function' ? dos(uno) : uno[dos])

  // Resultado: [ 4, 10, '1,2,3', 3 ]
  console.log('\n7 - ', respuesta)
  console.log("const respuesta = elementos.map(([uno, dos]) => typeof dos === 'function' ? dos(uno) : uno[dos])")
}

// 8.

{
  const numeros = ['1', '2', '3', '4', '5', '6']
  const respuesta = numeros.map(Number)

  // Resultado: [ 1, 2, 3, 4, 5, 6 ]
  console.log('\n8 - ', respuesta)
  console.log('const respuesta = numeros.map(Number)')
}

// 9.

{
  const nombres = ['Antonio', 'Felip', 'Cristian', 'Eugeni', 'Paul', 'Borja', 'Jesus']
  const sonJuniors = [false, true, true, false, true, true, true]
  const respuesta = nombres.map((nombre, i) => sonJuniors[i] ? nombre : undefined)

  // Resultado: [ undefined, 'Felip', 'Cristian', undefined, 'Paul', 'Borja', 'Jesus']
  console.log('\n9 - ', respuesta)
  console.log('const respuesta = nombres.map((nombre, i) => sonJuniors[i] ? nombre : undefined)')
}

// 10.

{
  const alumnos = [[{ nombre: 'Clara' }, [9, 6]], [{ nombre: 'Rodrigo' }, [6, 4]], [{ nombre: 'Isabel' }, [10, 3]]]
  const respuesta = alumnos.map(alumno => {
    return {
      ...alumno.at(0),
      matematicas: alumno.at(1).at(0),
      lengua: alumno.at(1).at(1)
    }
  })

  /* Resultado:
  [
    { nombre: 'Clara', matematicas: 9, lengua: 6 },
    { nombre: 'Rodrigo', matematicas: 6, lengua: 4 },
    { nombre: 'Isabel', matematicas: 10, lengua: 3 }
  ] */
  console.log('\n10 - ', respuesta)
  console.log(`const respuesta = alumnos.map(alumno => {
    return {
      ...alumno.at(0),
      matematicas: alumno.at(1).at(0),
      lengua: alumno.at(1).at(1)
    }
  })`)
}

// FlatMap
console.log('\nFLATMAP:')
// 1.

{
  const numeros = [1, [2], [3], 4, [5], [6, 7, 8]]
  const respuesta = numeros.flatMap(n => n)

  // Resultado: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  console.log('\n1 - ', respuesta)
  console.log('const respuesta = numeros.flatMap(n => n)')
}
// 2.

{
  const nombres = ['Antonio', 'Felip', 'Cristian', 'Eugeni', 'Paul', 'Borja', 'Jesus']
  const sonJuniors = [false, true, true, false, true, true, true]
  const respuesta = nombres.flatMap((nombre, i) => sonJuniors[i] ? nombre : [])

  // Resultado: [ 'Felip', 'Cristian', 'Paul', 'Borja', 'Jesus' ]
  console.log('\n1 - ', respuesta)
  console.log('const respuesta = nombres.flatMap((nombre, i) => sonJuniors[i] ? nombre : [])')
}
