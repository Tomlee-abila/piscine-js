const clone1 = Object.assign({}.person)
const clone2 = Object.assign({}.person)
const samePerson = person

Object.freeze(clone1)
Object.freeze(clone2)

person.age += 1
person.country = 'FR'