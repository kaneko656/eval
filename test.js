

let evalStr = require('./index')

// && || ==  は単体でもOK（ & | = ）

console.log(evalStr('1 + 2 == 3'))
console.log(evalStr('1 + 2 == 4'))
console.log(evalStr('1 + 2 == 3 && 3 * 5 > 10'))
console.log(evalStr('1 + 2 == 3 || 3 * 5 < 14'))
console.log(evalStr('(1 + 2 * 3) * 6 == 42'))
console.log(evalStr('(2 + 4) / 3 % 2 == 0'))

console.log(evalStr(new Date().getSeconds() + '% 2 == 0')) // unknown

console.log(evalStr('aaa == aaa')) // String

let data = {
    id: 'aaa',
    num: 7,
}

console.log(evalStr('id == aaa', data))
console.log(evalStr('id == aa && num < 10', data))
