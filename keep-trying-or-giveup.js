const retry = (count, callback) =>{
    return async (...args) => {
        let attempts = 0
        while(attempts <= count){
            try{
                return await callback(...args)
            }catch{
                attempts++
                if (attempts > count){
                    throw new Error("Error")
                }
            }
        }
    }
}

const timeout = (timeout, callback)=>{
    return async (...args)=>{
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(reject(new Error('timeout')), timeout)
        })
        try{
            Promise.race([timeoutPromise, callback(...args)])
        }catch(error){
            throw error;
        }        
    }
}

