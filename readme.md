# hash-choose
Exports a function that returns a function that maps a hash function to values, defaults to values(map[hash(string)]) if no key in map matches the hash and hash returns an integer.

##installation:
```sh
npm install --save hash-choose
```

##usage:
```js
const hashChoose = require('hash-choose');
const getValue = hashChoose({
    map: {
        123: 'foo',
        234: 'bar',
        345: 'baz'
    },
    hash: x => x + 100
});
getValue(23); // 'foo'
getValue(134); // 'bar'
getValue(134); // 'bar'
getValue(700); // values(map)[(700 + 100) % 3] => 'baz'
getValue(899); // values(map)[(899 + 100) % 3] => 'foo'
```
