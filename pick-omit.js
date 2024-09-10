const pick = (obj, arrStr) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => Array.isArray(arrStr)?arrStr.includes(key): arrStr == key))
const omit = (obj, arrStr) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => Array.isArray(arrStr)? !(arrStr.includes(key)): arrStr != key))

const ob = {
    "name": "Abila",
    "firstName" : "Tomlee",
    "last":24,
    "lastName": "Otieno"
}

console.log(omit(ob, ['firstName', 'lastName']))