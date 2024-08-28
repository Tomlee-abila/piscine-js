const is = {
    num: (n) => typeof n == 'number' ? true : false,
    nan: (n) => typeof n == 'number' ? true : false,
    str: (n) => typeof n == 'string' ? true : false,
    bool: (n) => typeof n == 'boolean' ? true : false,
    undef: (n) => typeof n == 'undefined' ? true : false,
    def: (n) => typeof n !== 'undefined' ? true : false,
    arr: (n) => Array.isArray(n) ? true : false,
    obj: (n) => typeof n == 'object' ? true : false,
    fun: (n) => typeof n == 'function' ? true : false,
    truthy: (n) => (n) ? true : false,
    falsy: (n) => !(n) ? true : false
}