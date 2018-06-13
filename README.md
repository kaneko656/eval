### Stringによる評価式（数値比較，文字一致等）を分析してture/falseを返します

~~~
  let evalStr = require('./index')


  evalStr('1 + 2 == 3') // { judge: true }
  evalStr('1 + 2 == 4') // { judge: false }
  evalStr('1 + 2 == 3 && 3 * 5 > 10') // { judge: true }
  evalStr('1 + 2 == 3 || 3 * 5 < 14') // { judge: true }
  evalStr('1 + 2 == 3 && 3 * 5 > 10') // { judge: true }
  evalStr('1 + 2 != 3 || 3 * 5 < 14')  // { judge: false }
  evalStr('(1 + 2 * 3) * 6 == 42') // { judge: true }
  evalStr('(2 + 4) / 3 % 2 == 0') // { judge: true }
~~~

~~~
  evalStr(new Date().getSeconds() + '% 2 == 0') // unknown

  evalStr('aaa == aaa') // { judge: true }
~~~
~~~
  let data = {
      name: 'kaneko',
      year: 23,
      hobby: ['compose'],
      date: {
          month: 8
      }
  }

  evalStr('name == kaneko', data) // { judge: true }
  evalStr('name == kaneko && year < 20', data) // { judge: true }
~~~


カッコが複雑に使われていると正しく動作しない場合があります．．．
