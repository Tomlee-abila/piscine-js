const is = {}
is.num = (n) => typeof n == 'number' ? true : false
is.nan = (n) => Number.isNaN(n)
is.str = (n) => typeof n == 'string' ? true : false
is.bool = (n) => typeof n == 'boolean' ? true : false
is.undef = (n) => typeof n == 'undefined' ? true : false
is.def = (n) => typeof n !== 'undefined' ? true : false
is.arr = (n) => Array.isArray(n) ? true : false
is.obj = (n) => typeof n == 'object' && !(n instanceof Date || n instanceof Map || n instanceof Set || Array.isArray(n) || n instanceof RegExp) 
is.fun = (n) => typeof n == 'function' ? true : false
is.truthy = (n) => (n) ? true : false
is.falsy = (n) => !(n) ? true : false