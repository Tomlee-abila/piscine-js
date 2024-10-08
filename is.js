const is = {}
is.num = (n) => typeof n == 'number'
is.nan = (n) => Number.isNaN(n)
is.str = (n) => typeof n == 'string'
is.bool = (n) => typeof n == 'boolean'
is.undef = (n) => typeof n == 'undefined'
is.def = (n) => typeof n !== 'undefined'
is.arr = (n) => Array.isArray(n)
is.obj = (n) => typeof n == 'object' && !(n instanceof Date || n instanceof Map || n instanceof Set || Array.isArray(n) || n instanceof RegExp || n === null)
is.fun = (n) => typeof n == 'function' ? true : false
is.truthy = (n) => (n) ? true : false
is.falsy = (n) => !(n) ? true : false