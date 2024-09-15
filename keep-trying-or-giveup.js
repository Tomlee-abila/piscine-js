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

function timeout(delay, callback) {
    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('timeout')), delay)
        );
        
        const callbackPromise = callback(...args);
        
        try {
            return await Promise.race([callbackPromise, timeoutPromise]);
        } catch (error) {
            if (error.message === 'timeout') {
                throw error; 
            }
            throw error;
        }
    };
}

