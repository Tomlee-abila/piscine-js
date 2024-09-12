const deepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item)); // Recursively copy array items
    }

    if (obj instanceof Date) {
        return new Date(obj); // Handle Date objects
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj); // Handle RegExp objects
    }

    const copiedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = deepCopy(obj[key]); // Recursively copy object properties
        }
    }
    return copiedObj;
};
// console.log(deepCopy({2:3,4:5,7:6}))
// const r = Math.random()
//   const obj = [r, Object.freeze([r, Object.freeze([r])])]
//   const copy = deepCopy(obj)
//   console.log(copy)
//   console.log(obj)
// //   eq(copy, obj)
//   console.log(obj[1][1] === obj[1][1])
// console.log(deepCopy({ user: 'mika', age: 37 }))