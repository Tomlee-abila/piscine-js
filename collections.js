const arrToSet = (arr) => new Set(arr)
const mapToObj = (map) => Object.fromEntries(map)
const arrToStr = (arr) => arr.toString().replaceAll(",", "")


const arr = [1,1,2,2,3,3]
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);

console.log(mapToObj(entries))