'use strict';

module.exports = function(arr, n) {
  if (!Array.isArray(arr))
    throw new TypeError('First argument must be array');

  if (arr == null) return 0;

  var len = arr.length;

  if (n > len)
  	throw new Error('Argument n can not be greater than array size');

  if (n == null) return arr[len - 1];

  return arr.slice(len - n, len);
}