// function sayHi() {
//     return 'hi'
// }

// const result = sayHi()
// console.log(result)

// function* sayHiGen(){
//     yield 'hey'
//     yield 'hey!'
//     yield 'hey Jude!'
//     return 'hi'
// }

// const resultGen = sayHiGen()
// console.log(resultGen.next())
// console.log(resultGen.next())
// console.log(resultGen.next())

// const resultGenForOf = sayHiGen()
// for (const iterator of resultGenForOf) {
//     console.log(iterator)
// }


function* newGenerator() {
    yield 'something'
    const final = yield 'give me value'
    const afterFinal = yield 'AFTER'
    return final
}

const newGeneratorIt = newGenerator()

console.log(newGeneratorIt.next())
console.log(newGeneratorIt.next())
console.log(newGeneratorIt.next('Yep'))
console.log(newGeneratorIt.next())
