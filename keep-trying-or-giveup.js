const retry = (count, callback) =>{
    return async (...args) => {
        let attempts = 0
        while(attempts <= count){
            try{
                return await callback(...args)
            }catch{
                attempts++
                if (attempts > count){
                    throw new Error("Max attempt exceeded")
                }
            }
        }
    }
}

