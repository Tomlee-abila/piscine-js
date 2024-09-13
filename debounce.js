const debounce = (func, delay = 1000) =>{
    let timeout

    return (...args)=>{
        clearTimeout(timeout)

        timeout = setTimeout(() =>{
            func(...args)
        }, delay)
    }
}

const opDebounce = (func, delay = 1000, option = {leading: false, trailing: true}) =>{
    let timeout
    let trigered = false

    return (...args)=>{
        if (option.leading && !trigered) func(...args), trigered = true

        if (option.trailing){
            clearTimeout(timeout)

            timeout = setTimeout(() =>{
                func(...args)
            }, delay)
        }
    }
        
}

