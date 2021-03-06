import { ovejas } from './data.js'

const blue = ovejas.filter(e => e.color === 'azul')
console.log(blue)
const blueDestructuring = ovejas.filter(({ color }) => color === 'azul')
console.log(blueDestructuring)

let filterRedAndSevenChar = ovejas.filter(e => e.color === 'rojo' && e.name.length >= 7)
console.log(filterRedAndSevenChar)

filterRedAndSevenChar = ovejas.filter(e => e.color === 'rojo').filter(e => e.name.length >= 7)
console.log(filterRedAndSevenChar)

filterRedAndSevenChar = ovejas.filter(({ name, color }) => color === 'rojo' && name.length >= 7)
console.log(filterRedAndSevenChar)

const str = ' Hola esto     es una prueba '
const splitted = str.split(' ').filter(Boolean).filter(e => e.includes('a'))
console.log(splitted)
