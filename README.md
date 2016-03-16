# a-last
Returns the last n element of an array

## Install

```sh
$ npm install --save a-last
```

## Example

```js
var last = require('a-last');

var arr = [1, 2, 3, 4, 5];

console.log(last(arr, 2));
// -> [4, 5]

console.log(last(arr));
// -> [5]
```

### `require('a-last')(array, n)`

**Arguments**:
- `array`: The array
- `n`: number of last n elements that wants to be returned
- If we do not mention argument n then function will return last element of array

**Returns**: Returns the last n element of an array

## License

&copy; 2016 vikram. MIT License
