// const all = async (obj)=>{
//     let keys = Object.keys(obj)
//     if (obj == {})return obj
//     let result = []
//     for (let i = 0; i < keys.length; i++){        
//         result.push(await obj[keys[i]]())
//     }
//     return result
// }

// // console.log(all({hello: ()=> "hello"}))
// // console.log(all({}))

async function series(args) {
    let results = [];
    for (const fn of args) {
      const result = await fn(); 
      results.push(result); 
    }
    return results;
  }
  