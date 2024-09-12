const defaultCurry = (obj) => (obj1) =>{
    let result = {...obj}
    let arr = Object.entries(obj1)

    arr.forEach(([key, value]) =>{        
        result[key] = value        
    })
    return result
}

//console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
//   })
//   )
// console.log(defaultCurry({ http: 403, age: 0, connection: 'close' })({http: 200, age: 30, connection: 'keep-alive',  content_type: 'text/css',}))
//   { http: 200, age: 30, connection: 'keep-alive', content_type: 'text/css' },


const mapCurry = (func) => (obj) =>{
    let result = {}

    Object.entries(obj).forEach(([key, value])=>{
        let answer = func([key, value])
        result[answer[0]] = answer[1]
    })
    return result
}

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
//   }
//console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))


const reduceCurry = (func) => (obj, initialValue) =>{
    let accumulator = initialValue;
    const entries = Object.entries(obj);
    
    entries.forEach(([key, value]) => {
      accumulator = func(accumulator, [key, value]);
    })
    
    return accumulator;
}

//console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))

const filterCurry = (func) =>(obj) =>{
    let result = {}
    Object.entries(obj).forEach(([key, value])=>{
        if (func(([key, value]))){
            result[key] = value
        }
    })
    return result
}

//console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
//   }))

const reduceScore =(obj, accu = 0)=>{
    let accumulator = accu
    accumulator += reduceCurry((acc,[key, value]) => (value.isForceUser)?acc+value.pilotingScore+value.shootingScore:acc)(obj,0)
    return accumulator
}
// console.log(reduceScore(personnel, 0))
// console.log(reduceScore(personnel, 420))

const filterForce = (obj) => filterCurry(([key, value]) => value.shootingScore >= 80)(obj)
//console.log(filterForce(personnel))

const mapAverage = (obj) => {
    
    return mapCurry(([key, value]) => {
        
        let avarage = (value.pilotingScore + value.shootingScore)
        value.averageScore = avarage
        return [key, value]
     })(obj)
}
//console.log(mapAverage(personnel))
