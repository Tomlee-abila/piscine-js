const throttle = (func, delay = 1000) => {
    let wait = false

    return (...args) =>{
        if (!wait) func(...args), wait = true
        setTimeout(()=>{
            func(...args)
            wait = true
        }, delay)
    }
}

const opThrottle = () =>{
    
}