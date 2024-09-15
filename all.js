// const all = (obj)=>{
//     let keys = Object.keys(obj)
//     if (obj == {})return obj
//     let result = []
//     for (let i = 0; i < keys.length; i++){        
//         result.push(obj[keys[i]]())
//     }
//     return result
// }

// // console.log(all({hello: ()=> "hello"}))
// // console.log(all({}))


async function all(objs = {}) {
	var res = {};
	if (Object.keys(objs).length === 0) return {};
	for (let key in objs) {
		res[key] = await objs[key];
	}
	return res;
}