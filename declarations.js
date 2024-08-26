const escapeStr = '`\\/"\''
const arr = [4,'2']
const obj = {
    str: "Hello",
    num: 10,
    bool: true,
    undef: undefined
}

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "Hello",
        num: 10,
        bool: true,
        undef: undefined
    }
}

Object.freeze(obj);
Object.freeze(nested);
Object.freeze(arr);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
