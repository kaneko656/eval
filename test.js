

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
    name: 'kaneko',
    year: 23,
}

console.log(evalStr('name == kaneko', data))
console.log(evalStr('name == kaneko && year > 20', data))
