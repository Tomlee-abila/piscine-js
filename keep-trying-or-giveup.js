const retry = (count, callback) =>{
    return async (...args) => {
        let attempts = 0
        while(attempts <= count){
            try{
                return await callback(...args)
            }catch(error){
                attempts++
                if (attempts > count){
                    throw error
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
            return await Promise.race([timeoutPromise, callback(...args)])
        }catch(error){
            throw error;
        }        
    }
}

